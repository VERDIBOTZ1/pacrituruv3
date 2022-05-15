let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*BAGUS KAH BEGITU DECK?*', 'status@broadcast')
}

handler.customPrefix = /^(p|P)$/i
handler.command = new RegExp

module.exports = handler
