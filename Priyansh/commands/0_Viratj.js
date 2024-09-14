 const fs = require("fs");
module.exports.config = {
	name: "aadi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("prefix") ||
     react.includes("Virat") || 
react.includes("owner")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆 ★\n\n✦🌸===『*★🌸===VIRAT SAINI✦\n\n★★᭄𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 :\n\n✦ https://www.instagram.com/virat_saini72?igsh=cTAyOWh4dGtiNjlt  ✦ \n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍𝐊 𝐌𝐄𝐑𝐄 𝐁𝐀𝐁𝐔 𝐊𝐀 😁\n 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐀 𝐋𝐔𝐊 😁😋 https://www.facebook.com/profile.php?id=100030585286077`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Screenshot_20240914-214731.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
