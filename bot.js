const { createClient } = require('bedrock-protocol')
const TelegramBot = require('node-telegram-bot-api')

const token = "8365613177:AAFNxIzHyprR3AWn4cqQnD41FOMC2Yjw2LU"

const bot = new TelegramBot(token, { polling: true })

let client = null
let chatId = null

bot.onText(/\/start/, (msg) => {

chatId = msg.chat.id

if (!client) {

client = createClient({
host: "Ramadan-vrXk.aternos.me",
port: 49656,
username: "TelegramBot",
offline: false,
skinData: {
CurrentInputMode: 1,
DefaultInputMode: 1,
DeviceOS: 7,
DeviceModel: "PC",
DeviceId: "123456"
}
})

bot.sendMessage(chatId, "البوت دخل السيرفر")

client.on('text', (packet) => {
if(packet.source_name){
bot.sendMessage(chatId, packet.source_name + ": " + packet.message)
}
})

client.on('disconnect', () => {
client = null
bot.sendMessage(chatId, "البوت خرج من السيرفر")
})

} else {
bot.sendMessage(chatId, "البوت داخل السيرفر بالفعل")
}

})

bot.onText(/\/stop/, (msg) => {

if (client) {
client.disconnect()
client = null
bot.sendMessage(msg.chat.id, "تم ايقاف البوت")
}

})