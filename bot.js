onst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Ready for dedth!);
});

client.on('message', msg => { 

  var command = msg.content.toLowerCase()
  var answer = ["yes", "no", "maybe", "that's classified", "nope", "yep"];

  if (command.includes( ['sunao ni'] )){
      msg.reply('I LOVE YOU!');
      }

      if (command.includes( ['hey tani i love you'] )){
        msg.react('💙');
        }

  else if ( command.startsWith(['hey'])  && command.endsWith(['?']) ){
      msg.reply(answer[Math.floor(Math.random()*answer.length)]);
      }
  });


client.login(process.env.BOT_TOKEN);
