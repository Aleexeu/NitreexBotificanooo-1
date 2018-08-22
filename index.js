
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    client.user.setPresence({ game: { name: `/comandos`, type: 1, url: 'https://www.youtube.com/yRecky'} });
    console.log('Logado');
});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1);
    if(cmd === '/anuncio'){

    if(!message.member.hasPermission("MANAGE_ROLES")) return;
       const sayMessage = args.join(" ");
    message.delete()
    
       const embed = new Discord.RichEmbed()
    
       .setTitle('📢 **Anuncio** 📢')
       .setDescription(sayMessage)
    
    
       message.channel.send(embed);
    }
});
    
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
