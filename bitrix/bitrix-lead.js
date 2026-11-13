/**
 * Bitrix24 lead creation for the GSP Law contact form.
 *
 * Runs SERVER-SIDE ONLY (inside the contact-api that already sends mail to
 * info@gsplaw.co.uz). Never put the webhook URL in app.js / the browser.
 *
 * Requires Node 18+ (built-in fetch). No dependencies.
 *
 * Env:
 *   BITRIX_WEBHOOK_URL  e.g. https://YOURPORTAL.bitrix24.com/rest/1/xxxxxxxx/
 *                       (inbound webhook with the "CRM" permission)
 *   BITRIX_ASSIGNED_ID  optional, Bitrix user ID to assign the deal to
 *   BITRIX_CATEGORY_ID  optional, funnel ID (default 0 = "GSP")
 *   BITRIX_STAGE_ID     optional, stage (default NEW = "Yangi lid")
 *   BITRIX_SOURCE_ID    optional, source (default CALLBACK = "Веб-сайт")
 *
 * Usage in the existing contact handler (after/alongside sending the email):
 *
 *   const { createBitrixLead } = require('./bitrix-lead');
 *   // payload = { name, phone, email, service, message } from the form
 *   createBitrixLead(payload).catch(err => console.error('Bitrix lead failed:', err));
 *
 * Don't await it in a way that fails the request: the email must still
 * go out even if Bitrix is down.
 */

const WEBHOOK = (process.env.BITRIX_WEBHOOK_URL || '').replace(/\/?$/, '/');

function clean(v, max = 2000) {
  return String(v == null ? '' : v).trim().slice(0, max);
}

async function createBitrixLead({ name, phone, email, service, message } = {}) {
  if (!process.env.BITRIX_WEBHOOK_URL) {
    throw new Error('BITRIX_WEBHOOK_URL is not set');
  }

  const n = clean(name, 200);
  const p = clean(phone, 50);
  const e = clean(email, 200);
  const s = clean(service, 200);
  const m = clean(message);

  const call = async (method, body) => {
    const res = await fetch(`${WEBHOOK}${method}.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.error) {
      throw new Error(`Bitrix ${method} ${res.status}: ${data.error_description || data.error || 'unknown'}`);
    }
    return data.result;
  };

  // 1) Contact (so the client card has name / phone / email)
  const contact = { NAME: n || p, OPENED: 'Y', SOURCE_ID: process.env.BITRIX_SOURCE_ID || 'CALLBACK' };
  if (p) contact.PHONE = [{ VALUE: p, VALUE_TYPE: 'WORK' }];
  if (e) contact.EMAIL = [{ VALUE: e, VALUE_TYPE: 'WORK' }];
  const contactId = await call('crm.contact.add', { fields: contact, params: { REGISTER_SONET_EVENT: 'Y' } });

  // 2) Deal in funnel "GSP" (CATEGORY_ID 0), stage "Yangi lid" (NEW)
  const deal = {
    TITLE: `Заявка с сайта — ${n || p}`,
    CATEGORY_ID: Number(process.env.BITRIX_CATEGORY_ID || 0),
    STAGE_ID: process.env.BITRIX_STAGE_ID || 'NEW',
    CONTACT_ID: contactId,
    SOURCE_ID: process.env.BITRIX_SOURCE_ID || 'CALLBACK',
    SOURCE_DESCRIPTION: 'Форма «Контакты» на сайте gsplaw.co.uz',
    COMMENTS: [s && `Услуга: ${s}`, m && `Сообщение: ${m}`].filter(Boolean).join('\n\n'),
    OPENED: 'Y',
  };
  if (process.env.BITRIX_ASSIGNED_ID) deal.ASSIGNED_BY_ID = Number(process.env.BITRIX_ASSIGNED_ID);

  return call('crm.deal.add', { fields: deal, params: { REGISTER_SONET_EVENT: 'Y' } }); // new deal ID
}

module.exports = { createBitrixLead };
