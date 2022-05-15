let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/bokep.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*ANJG 2022 MASIH SANGE :v*', 'status@broadcast')
}

handler.customPrefix = /^(Memek|Kontl|18+|Bokep)$/i
handler.command = new RegExp

module.exports = handler
