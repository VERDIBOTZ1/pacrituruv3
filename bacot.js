let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/bacot.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*SOK JAGO KENA ULTI MAK NAGIS*', 'status@broadcast')
}

handler.customPrefix = /^(jancok|konto)$/i
handler.command = new RegExp

module.exports = handler
