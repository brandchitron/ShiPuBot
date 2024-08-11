module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "information",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link = ["https://i.imgur.com/afSpOv6.gif", "https://i.imgur.com/afSpOv6.gif", "https://i.imgur.com/afSpOv6.gif", "https://i.imgur.com/afSpOv6.gif", "https://i.imgur.com/fHgoeUS.gif", "https://i.imgur.com/xLS68nV.gif", "https://i.imgur.com/afSpOv6.gif", "https://i.imgur.com/afSpOv6.gif"];
var callback = () => api.sendMessage({body:`✦𝗔𝗗𝗠𝗜𝗠 𝗔𝗡𝗗 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡✦

⁂BoT NaMe: ${global.config.BOTNAME}

✡BoT Prefix: ${global.config.PREFIX}

༻𝐎𝐖𝐍𝐄𝐑:- ☞Legenf Sam☜ ༺
༒𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠YourHusband〠.༒

༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- ☞ https://www.facebook.com/Usmanrajpoot220 ☜ 

༻𝘠𝘰𝘶𝘵𝘶𝘣𝘦 𝘭𝘪𝘯𝘬༺:- 
☞ https://youtube.com/@Legend_Sam_Edits ☜

 ֎𝘊𝘰𝘯𝘵𝘢𝘤𝘵 𝘔𝘦 𝘖𝘯 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱֍ :-  ☞+923124175743☜
 
➟UPTIME☆

✬Today Is: ${juswa} 

➳BoT Is Running ${hours}:${minutes}:${seconds}.

✫Thanks For Using ${global.config.BOTNAME} BoT!`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };;