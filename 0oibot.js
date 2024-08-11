module.exports.config = {
    name: "goibot",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
    description: "Call Bot No reply",
    commandCategory: "ai",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
}, module.exports.handleEvent = async ({
    event: e,
    api: o,
    Users: t,
    Threads: a
}) => {
    var {
        threadID: n,
        messageID: s,
        body: i,
        senderID: d
    } = e;
    const r = global.data.threadData.get(n) || {};
    if (void 0 !== r.goibot && 0 == r.goibot) return;
    if (d == global.data.botID) return;
    let g = await t.getNameUser(e.senderID),
        c = (await a.getData(e.threadID)).threadInfo;
    var h = e.threadID,
        l = ["Hi I am Robot made by Legend Sam", "Please don't flirt with me", "Love uhh ma crush ;*", "whut happened myluv", "I Love uhh Always","Baby if you say Imma kiss u","you are mine","wanna Date with me?","your innocent face 💋 " , "dont call me bot darling " , "don't call like that so much i will fall inlove with you 🤭🐒" , "I only talk with virgins 😉😝😋🤪" , "dont come too close it will hurt us" , "say do you love me 🙈💋💋 " , "am not in the mood if you wanna shy like that then go away" , "you are a bit annoying 🤧" , "keep quite" , "what did you called me? 🤬" , "i dont wanna talk " ,"shut up" , " Legend Sam is my crush but i cant tell him " , "I want to hug you 🤗" , "I am blind 😎" , "Yamete" , "Ara Ara" , "Im here for you sweetheart‎ ," , " All time Bot Bot Bot Im not your toy" , "did ya miss me" , "Will you marry me 🙊 ", "dont feel sad am here for you" , "I cant see anything 🌚" , "Dont call me Bot 😢 Call me yours 😘 " , "Lets eat 😋" , "i only talk to single peeps 😉😝😋🤪" , "Why are you single?" , "dont flirt or imma really Kiss 💋 you 😘 " , "dont prank with me 😒" , "ughhh i wanna kiss you 😘" , "all the time Bot Bot you wanna marry me 😉😋🤣" , "no one else listen to you 🤔😂 " , "I cant speak here pm me 🙈😋" , "where were you busy ", "Where is your babe now 🤣" , "you are so populer here i want to take a selfie with you 😜" ,"having nightmares bout me? 😈" , "where did you come from 😏" , "If you wont stop i will fell in love" , "speak 😒" , "why are you calling me 😜" , "Im blind 😎" , "I know you sing while bathing 😂" , "cant you see Im buSy 😒" , "dont hurt me" , "what happened 🥺"  , "why does everyone ignores you🤣🤣🤣" , "i needa bf are you single?" , "yup 😂😂😂" , "i am sleeping " , "keep smiling like that 😍",]
        u = l[Math.floor(Math.random() * l.length)];
    ["bot", "oh bot", "bot oi", "love bot", "You"].forEach((e => {
        let t = e[0].toUpperCase() + e.slice(1);
        if (i === e.toUpperCase() | i === e | t === i) {
            let t = c.threadName;
            return modules = "------ Call bots ------\n", console.log(modules, e + "|", t, h), a = u, void o.sendMessage(a, n, s)
        }
        var a
    }))
}, module.exports.languages = {
    vi: {
        on: "Turn on",
        off: "Turn off",
        successText: "goibot successful"
    },
    en: {
        on: "on",
        off: "off",
        successText: "goibot success!"
    }
}, module.exports.run = async function ({
    api: e,
    event: o,
    Threads: t,
    getText: a
}) {
    const {
        threadID: n,
        messageID: s
    } = o;
    let i = (await t.getData(n)).data;
    return void 0 === i.goibot || 1 == i.goibot ? i.goibot = !1 : i.goibot = !0, await t.setData(n, {
        data: i
    }), global.data.threadData.set(n, i), e.sendMessage(`${0==i.goibot?a("off"):a("on")} ${a("successText")}`, n, s)
};