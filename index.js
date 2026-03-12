const bedrock = require("bedrock-protocol");

function startBot() {

const client = bedrock.createClient({
host: "Ramadan-vrXk.aternos.me",
port: 49656,
username: "AFK_Bot",
offline: true
});

client.on("join", () => {
console.log("✔ البوت دخل السيرفر");
});

client.on("disconnect", () => {
console.log("✖ البوت انفصل.. يحاول يرجع");
setTimeout(startBot, 5000);
});

client.on("error", (err) => {
console.log("⚠ خطأ:", err.message);
});

}

startBot();