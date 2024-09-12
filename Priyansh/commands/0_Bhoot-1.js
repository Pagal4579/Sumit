module.exports.config = {
  name: "bhoot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "bhuth Dp photos",
  commandCategory: "Random-IMG",
  usages: "bhoot dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
      "https://i.imgur.com/O3w9rfy.jpeg","https://i.imgur.com/rGQAIEV.jpeg","https://i.imgur.com/UR3nZZU.jpeg","https://i.imgur.com/UxBhCr2.jpeg","https://i.imgur.com/aFd7yBR.jpeg","https://i.imgur.com/NVRPESo.jpeg","https://i.imgur.com/Vz4eEfU.jpeg","https://i.imgur.com/Qdmp3ur.jpeg","https://i.imgur.com/TUCL77W.jpeg","https://i.imgur.com/aW0yjtL.jpeg","https://i.imgur.com/jFTI2KU.jpeg","https://i.imgur.com/qlk2hzU.jpeg","https://i.imgur.com/zZ369xs.jpeg","https://i.imgur.com/iVHm4Qc.jpeg","https://i.imgur.com/8neWoE9.jpeg","https://i.imgur.com/BTPhVsE.jpeg","https://i.imgur.com/Z7NcgkG.jpeg","https://i.imgur.com/5GIfTQh.jpeg","https://i.imgur.com/E3msrCy.jpeg","https://i.imgur.com/FB4L7S9.jpeg","https://i.imgur.com/U1kFGYK.jpeg","https://i.imgur.com/nhwpWI0.jpeg","https://i.imgur.com/IfMqV9z.jpeg","https://i.imgur.com/BaWXadZ.jpeg","https://i.imgur.com/mpCsH2J.jpeg","https://i.imgur.com/1WndRhh.jpeg","https://i.imgur.com/Hi08YHX.jpeg","https://i.imgur.com/ZZJ45r4.jpeg","https://i.imgur.com/qTMMhRe.jpeg","https://i.imgur.com/SdnHTBN.jpeg","https://i.imgur.com/ooCiY3N.jpeg","https://i.imgur.com/FncAMAk.jpeg","https://i.imgur.com/wZo04M1.jpeg","https://i.imgur.com/EcqaJOO.jpeg","https://i.imgur.com/9fhNfiS.jpeg","https://i.imgur.com/SXFlDFA.jpeg","https://i.imgur.com/223taMB.jpeg"
           ];
     var callback = () => api.sendMessage({body:`💝 𝐌𝐚𝐝𝐞 𝐁𝐲 pagla.larka`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
