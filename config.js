require('dotenv').config();
const fs = require('fs');
const { color } = require('./lib/myfunc');

const toBool = (value) => value === "true";

// Owner details
global.owner = process.env.OWNER_NUMBER;237680333605
global.nomerowner = process.env.OWNER_NUMBERS;237680333605

// Public mode
global.public = toBool(process.env.PUBLIC);false

// Watermark
global.packname = process.env.PACK_NAME;𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒
global.author = process.env.AUTHOR;.𝚩𝐋𝚫𝐂𝐊 𝐆𝚪𝚵𝐘 𝐋𝚵𝚯𝚴𝚰𝐃𝚫𝐒

// Auto functions
global.unavailable = toBool(process.env.UNAVAILABLE); false 
global.available = toBool(process.env.AVAILABLE);false
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);false
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.autoTyping = toBool(process.env.AUTO_TYPING);false
global.autoViewStatus = toBool(process.env.AUTO_STATUS_VIEW);true
global.autoStatusReact = toBool(process.env.AUTO_STATUS_REACT);true
global.welcome = toBool(process.env.WELCOME);
global.anticall = toBool(process.env.ANTI_CALL);
global.autobio = toBool(process.env.AUTO_BIO);

// Prefix
global.prefix = process.env.PREFIX;_

// Don't change this
global.antibot = false;

// Auto-reload config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(color(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});
