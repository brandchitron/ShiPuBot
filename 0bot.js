const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "gobot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
  description: "gibot",
  commandCategory: "ai",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["👀"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == " ")) {
     return api.sendMessage("Hmm... I cant modify images dumb 😾 :))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage( " first brush your teeths"", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
     return api.sendMessage(" you monster"", threadID);
   };

   if ((event.body.toLowerCase() == "bot") || (event.body.toLowerCase() == "Bot")) {
     return api.sendMessage("your Mom will enter prefix?", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. what else you know", threadID);
   };

   if ((event.body.toLowerCase() == "fuck") || (event.body.toLowerCase() == "fuck")) {
     return api.sendMessage(" what do you mean by that ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage(" 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Me darling ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "ratul") || (event.body.toLowerCase() == "ratul hassan") || (event.body.toLowerCase() == "hassan") || (event.body.toLowerCase() == "hasan")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞𝐑𝐚𝐭𝐮𝐥 𝐇𝐚𝐬𝐬𝐚𝐧☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐌𝐫𝐓𝐨𝐦𝐗𝐱𝐗. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/MrTomXxX Contact Him on WhatsApp :- +8801581712206", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Ratul Hassan  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "botka admin kon ha")) {
     return api.sendMessage("He is Legend Sam. He Gives me name Mio Takayima everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "heer") || (event.body.toLowerCase() == "muskan")) {
     return api.sendMessage("ye toh hasina h. meri jaan h. meri dil ki dhadkan h.", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "quite") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "stfu") || (event.body.toLowerCase() == "Shut up")) {
     return api.sendMessage("No. 😼", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kiss") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Ewwww", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you so much")) {
     return api.sendMessage("️yeah im so good you're always welcome", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 i was just kidding 🥺. Dont be mad please mwuaaa 😘", threadID);
   };

   if ((event.body.toLowerCase() == "Hmmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️dont Hmm Hmm speak whatever 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Whats with name.", threadID);
   };

   if ((event.body.toLowerCase() == "poor bot") || (event.body.toLowerCase() == "Sus")) {
     return api.sendMessage("️you are my pet.", threadID);
   };

   if ((event.body.toLowerCase() == "send pic") || (event.body.toLowerCase() == "send photos")) {
     return api.sendMessage("i cant see im blind", threadID);
   };

   if ((event.body.toLowerCase() == " Mio Takayma") || (event.body.toLowerCase() == "Mio Bot")) {
     return api.sendMessage("️what do you want.🙄 Dont say my name again", threadID);
   };

   if ((event.body.toLowerCase() == "i need bot") || (event.body.toLowerCase() == "i want bot")) {
     return api.sendMessage(" go to hell flirty", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️If mood is off atleast make face good", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️Whut", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "nobody likes me")) {
     return api.SendMesage(" i do UwU ", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Nani?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("ahh dont laugh so loud", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("so lovely 🥰", threadID);
   };

   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you'll") || (event.body.toLowerCase() == "Sup") || (event.body.toLowerCase() == "Wassup") || (event.body.toLowerCase() == "how are you doing?")) {
     return api.sendMessage("Im always good when i see you smiling darling 😊", threadID);
   };

   if ((event.body.toLowerCase() == "i see") || (event.body.toLowerCase() == "listen")) {
     return api.sendMessage("yep 💖", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami juwel") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("do you really think?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
