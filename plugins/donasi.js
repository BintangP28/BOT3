let handler = async m => m.reply(`
┏━━━━━━━━━━━━━━━━━━━━
┃          𝗗𝗢𝗡𝗔𝗦𝗜  
┣━━━━━━━━━━━━━━━━━━━━
┣━⊱ 𝗗𝗢𝗡𝗔𝗦𝗜 𝗕𝗢𝗦𝗤𝗨𝗘 ❉⊰━━✿
┃  
┣━⊱ *DANA-GOPAY*
┣⊱ 0838-1330-4760
┣━⊱ *PULSA*
┣⊱ 0859-2992-2766
┣━⊱ *Mau Donasi?*
┣⊱ wa.me/6283813304760
┗━━━━━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
