module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "MrTomXxX",
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "LegendSam 𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝘽𝙤𝙩<3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝘾𝙤𝙣𝙣𝙚𝙘𝙩𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙁𝙪𝙡𝙡 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[✨] 𝙈𝙖𝙡𝙞𝙝𝙖 𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧:- LEGEND SAM [✨]\n[✨] 1-𝘿𝙤𝙣𝙩 𝙎𝙥𝙖𝙢 𝙏𝙝𝙚 𝘽𝙤𝙩\n[✨] 2-𝘿𝙤𝙣𝙩 𝙆𝙞𝙘𝙠 𝘼𝙣𝙙 𝙍𝙚-𝘼𝙙𝙙 𝙏𝙝𝙚 𝘽𝙤𝙩\n[✨] 𝙏𝙤 𝙎𝙚𝙚 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨 𝘼𝙫𝙖𝙞𝙡𝙖𝙗𝙡𝙚 𝙏𝙮𝙥𝙚 [ ×help ] 𝙊𝙧 [ ×menu ] 𝙏𝙝𝙞𝙨 𝘽𝙤𝙩 𝙄𝙨 𝙀𝙙𝙞𝙩𝙞𝙣𝙜 𝘽𝙮 𝙈𝙧Sam\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ × ]❫･━━❜\n[✨] 𝙄𝙛 𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝘼𝙣𝙮 𝙌𝙪𝙚𝙨𝙩𝙞𝙤𝙣 𝙊𝙧 𝙉𝙚𝙚𝙙 𝙃𝙚𝙡𝙥 𝘾𝙤𝙣𝙩𝙖𝙘𝙩 𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣: https://www.facebook.com/Usmanrajpoot220\n[✨] 𝗩𝗶𝗲𝘄 𝗕𝗼𝘁 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:: [ .𝙢𝙧𝙩𝙤𝙢 ]\n[✨] 𝗤𝗧𝗩 𝗰𝗮𝗻 𝘂𝘀𝗲 [ ×𝗵𝗲𝗹𝗽 ] 𝗿𝘂𝗹𝗲 𝘁𝗼 𝘀𝗲𝗲 𝗽𝗲𝗼𝗽𝗹𝗲'𝘀 𝗱𝗶𝗿𝗲𝗰𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝘀𝗲𝘁 𝗯𝗼𝘅 𝗿𝘂𝗹𝗲𝘀\n[✨] 𝗠𝗲𝗺𝗯𝗲𝗿𝘀 𝘂𝘀𝗲 [ .𝗿𝘂𝗹𝗲 ] 𝘁𝗼 𝘃𝗶𝗲𝘄 𝘁𝗵𝗲𝗶𝗿 𝗯𝗼𝘅 𝗿𝘂𝗹𝗲𝘀\n◆━━━━━━━━━━━━━◆\n[✨] 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n[✨] BoT: Mio Takayima`, threadID);
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Dhaka").format("HH");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `join.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "[⚜️] 𝙃𝙚𝙮 𝘽𝙖𝙗𝙮 {type} {name}.\n\n𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙩𝙤 {threadName}.\n\n[❗] From Now {name} He is also a Group Member Somebody Welcome him.\n\n Yu {threadName} see {soThanhVien} Many members in here. Dont feel Lonely\n[🌐] First see GC Rules {type} To See Type \n◆━━━━━━━━━━━━━◆\n[📝] [ ×rule ](𝙐𝙣𝙡𝙚𝙨𝙨 𝙈ine 𝘼𝙙𝙢𝙞𝙣/𝘼nd 𝙂𝙧𝙤𝙪𝙥 𝘼𝙙𝙢𝙞𝙣 Add No 𝙍𝙪les.)\n[💥]𝙋𝙡𝙚𝙖𝙨𝙚 Dont disturb me so much or you'll get ban. \n[❤️] 𝙒𝙞𝙨𝙝 𝙔𝙤𝙪 𝙃𝙖𝙫𝙚 𝙖 𝙂𝙤𝙤𝙙 {session} || {time} 𝙃𝙖𝙫𝙚 𝙁𝙪𝙣 𝘼𝙣𝙙 𝙈𝙖𝙠𝙚 𝙉𝙚𝙬 𝙁𝙧𝙞𝙚𝙣𝙙𝙨": msg = threadData.customJoin;
			msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? '𝙎𝙪𝙣𝙤' : '𝙏𝙪𝙢')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩")
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                       }