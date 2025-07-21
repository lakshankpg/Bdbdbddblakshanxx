const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
    try {
        const status ={
        const status = `╭━━〔 *SENU X BOT* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• *⏳𝐔ᴘᴛɪᴍᴇ*:  ${runtime(process.uptime())} 
┃◈┃• *📟 𝐑ᴀᴍ 𝐔ꜱᴀɢᴇ*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃◈┃• *⚙️ 𝐇ᴏꜱᴛɴᴀᴍᴇ*: ${os.hostname()}
┃◈┃• *🧬 𝐕ᴇʀꜱɪᴏɴ*: V3 BETA
┃◈└───────────┈⊷
╰──────────────┈⊷

𝐇𝐞𝐥𝐥𝐨𝐰,𝐈'𝐦 𝐒𝐄𝐍𝐔 𝐌𝐃.𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐧𝐨𝐰🧚‍♂️ ....

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇꜱᴛᴇʀ ᴇxᴇ`;


        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363388320701164@newsletter',
                    newsletterName: 'SENU-X-BOT',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Alive Error:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
