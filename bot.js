const Discord = require("discord.js");
const bot = new Discord.Client(); 


bot.on('ready', () =>{
    let status = [
        {name: 'Ajuda?│!ajuda', type: 'STREAMING', url: 'https://twitch.tv/srmisterii'},
        {name: 'heart_eyesNighty » Communityheart_eyes', type: 'LISTENING'},
        {name: 'winkSteamwink', type: 'PLAYING'},
        {name: 'NitrooPVP│YouTube', type: 'WATCHING'},
      ];
      
      //STREAMING = Transmitindo
      //LISTENING = Ouvindo
      //PLAYING = Jogando
      //WATCHING = Assistindo
      
        function setStatus() {
            let randomStatus = status[Math.floor(Math.random() * status.length)];
            client.user.setPresence({game: randomStatus});
        }
      
        setStatus();
        setInterval(() => setStatus(), 10000);  //10000 = 10Ms = 10 segundos
        console.log('Logado');
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1);
if(cmd === 'h!anuncio'){
    const args = message.content.split(" ").slice(1);
    const prefix = '/'
    message.delete()
    if (!args.slice(0).join(' ')) return message.channel.send('test')
    message.channel.send({embed:{
        'description':args.slice(0).join(' ')
        ,'color':message.member.highestRole.color,
        "thumbnail":{
            }
        }
    }
    )
}
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
