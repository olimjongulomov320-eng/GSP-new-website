# Bitrix24 lead integration

Each submission of the "Contacts" form on gsplaw.co.uz creates a new Lead in Bitrix24.

## 1. Create the webhook in Bitrix24
Applications → Developer resources → Other → **Inbound webhook** → permission **CRM (crm)** → save.
Copy the URL: `https://YOURPORTAL.bitrix24.com/rest/<user_id>/<secret>/`

Treat it like a password; it's never committed or put in front-end code.

## 2. Add to the contact-api (mail.gsplaw.co.uz)
1. Copy `bitrix-lead.js` next to the contact-api code.
2. Set env var `BITRIX_WEBHOOK_URL` (optional: `BITRIX_ASSIGNED_ID`).
3. In the `/contact` handler, after the mail is sent:

```js
const { createBitrixLead } = require('./bitrix-lead');
createBitrixLead({ name, phone, email, service, message })
  .catch(err => console.error('Bitrix lead failed:', err));
```

## 3. Test
```bash
BITRIX_WEBHOOK_URL='https://.../rest/1/xxx/' node -e "require('./bitrix-lead').createBitrixLead({name:'Test',phone:'+998901234567',message:'test'}).then(console.log)"
```
Prints the new lead ID; delete the test lead in Bitrix afterwards.
