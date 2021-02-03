let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
┣━⊱ ❰ *INFO BOT* ❱ ═
┣⊱ _Dibuat dengan javascript via NodeJs_
┣⊱ _Rec: Bintang Pamungkas_
┣⊱ _Script: @BintangP28_
┃          
┣━⊱ ❰ *Thanks To* ❱ ═
┣⊱ _Kelvin:v_
┣⊱ _Izbullah:v_
┣⊱ _Me:v_
┣⊱ _Dan kawan yang lain :)_
┃
┣━⊱❰ *DONASI* ❱ ═
┣⊱ GOPAY: 0838-1330-4760
┣⊱ DANA: 0838-1330-4760
┣⊱ XL/AXIS:0859-2992-2766 / 0838-1330-4760
┃
┣━⊱ Request? Wa.me/6283813304760
┃
  ╰══─⊱  ❰ *Bintang Pamungkas* ❱ ⊰─══╯
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

