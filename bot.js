const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log('Ready for dedth!');
});

bot.on('message', msg => { 

  var command = msg.content.toLowerCase()
  var answer = ["yes", "no", "maybe", "that's classified", "nope", "yep"];

  if (command.includes( ['sunao ni'] )){
      msg.channel.send('I LOVE YOU!');
      }

  else if (command.includes( ['hey tani i love you'] )){
        msg.react('💙');
        }

  else if ( command.startsWith(['hey'])  && command.endsWith(['?']) ){
      msg.channel.send(answer[Math.floor(Math.random()*answer.length)]);
      }
  });


bot.login(process.env.BOT_TOKEN);
