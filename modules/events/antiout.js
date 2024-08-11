module.exports.config = {
    name: "antiout",
    eventType: ["log:unsubscribe"],
    version: "0.0.1",
    credits: "MrTomXxX",
    description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!data.antiout) return;
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "got kicked out by the admin";
    if (type == "self-separation") {
        api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
            if (error) {
                api.sendMessage(`[✨] 𝘼𝙉𝙏𝙄𝙊𝙐𝙏 [✨] ${name}Cant add this person 𝙸𝚖 𝚜𝚘𝚛𝚛𝚢 :( `, event.threadID)
            } else api.sendMessage(`[✨] 𝘼𝙉𝙏𝙄𝙊𝙐𝙏 [✨] Where you going ${name} You need my permission to leave UwU  〠`, event.threadID);
        })
    }
}