const TelegramBot = require("node-telegram-bot-api");
const request = require("request");

const api_token = "5906414899:AAFY1qAoqmdhAX7EBHP8S-TEZSKXAoV44jQ";

const bot = new TelegramBot(api_token,{polling:true});

bot.on("message",function(msg){
    request("http://numbersapi.com/"+msg.text,(err,res,body)=>{
        if(res.statusCode==200)
        {
            bot.sendMessage(msg.chat.id,body);
        }
        else{
            bot.sendMessage(msg.chat.id,"provide me the number")
        }
    })
})