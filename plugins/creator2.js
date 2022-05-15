const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "VERDI",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:VERDI\nitem1.TEL;waid=6285706735450:0\nitem1.X-ABLabel:📍 Creator verdibotz1\nitem2.EMAIL;type=INTERNET:okbang2022@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/VERDI_Dev.gnblogspot/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawa Timur\nitem5.X-ABLabel:──────[ ꜰᴀᴄʜʀɪ ]──────\nEND:VCARD"
}]
     "displayName": "My Partner",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:My Partner\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:📍 Partner Zxy\nitem2.EMAIL;type=INTERNET:fanny.mu.darat@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://bit.ly/sekturugnblogspot\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Provinsi | Jawa Tengah\nitem5.X-ABLabel:────[ ᴍy ᴩᴀʀᴛɴᴇʀ ]────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(nowner)$/i

module.exports = handler
