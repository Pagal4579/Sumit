module.exports.config = {
  name: "hotgirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "hot Dp photos",
  commandCategory: "Random-IMG",
  usages: "hotgirl dp",
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
    var link = [ "https://i.imgur.com/mVQtEs3.jpeg","https://i.imgur.com/pEsXv5v.jpeg","https://i.imgur.com/ssSFVY5.jpeg","https://i.imgur.com/ZnXmqkR.jpeg","https://i.imgur.com/VxHA6Qw.jpeg","https://i.imgur.com/2WgsaHs.jpeg","https://i.imgur.com/5riiuJ4.jpeg","https://i.imgur.com/drNzfIQ.jpeg","https://i.imgur.com/1ZxoQcM.jpeg","https://i.imgur.com/OA0NBWu.jpeg","https://i.imgur.com/bqFoOdH.jpeg","https://i.imgur.com/b7SXhfI.jpeg","https://i.imgur.com/89nI3UO.jpeg","https://i.imgur.com/8537B9E.jpeg","https://i.imgur.com/G9D0MbH.jpeg","https://i.imgur.com/t5DjD6E.jpeg","https://i.imgur.com/gKFUE9o.jpeg","https://i.imgur.com/Wn12P6A.jpeg","https://i.imgur.com/BUQAJkv.jpeg","https://i.imgur.com/HdtJ9hx.jpeg","https://i.imgur.com/zXxnMAW.jpeg","https://i.imgur.com/iTBFyUW.jpeg","https://i.imgur.com/wMqX14m.jpeg","https://i.imgur.com/IA4B2OG.jpeg","https://i.imgur.com/75zrWKe.jpeg","https://i.imgur.com/2K1fZE1.jpeg","https://i.imgur.com/xk3keG2.jpeg","https://i.imgur.com/bmvDol1.jpeg","https://i.imgur.com/t3mybJ5.jpeg","https://i.imgur.com/Sg0L9Jr.jpeg"           ];
     var callback = () => api.sendMessage({body:`mast mwl🤤`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
