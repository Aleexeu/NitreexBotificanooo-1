const Discord = require("discord.js");
const client = new Discord.Client(); 

client.on('ready', () =>{
    let status = [
        {name: 'Ajuda?│!ajuda', type: 'STREAMING', url: 'https://twitch.tv/srmisterii'},}
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
});
client.on('message', message => {
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
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1)
    if(cmd === '/ban'){
        const args = message.content.split(" ").slice(1);
        var razao = args.slice(1).join(" ")
            var membro = message.mentions.members.first();
            if(!message.member.hasPermissions("BAN_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
            if(!membro) return message.reply("você não mencinou ninguém")
            if(!membro.bannable) return message.reply("Você não pode banir essa pessoa")
            if(razao.length < 1) return message.reply("Coloque um motivo!")
            membro.ban()
            message.channel.send(`O membro ${membro.user.username} foi banido do servidor.\nMotivo: ${razao}`)
      }
});
client.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('/twitter')){
        message.channel.send('Twitter: https://twitter.com/RedeCrownMC');
    }
    if (message.content.startsWith('/ip')){
        message.channel.send('Nosso ip é: CrownMC.reis.host');
    }
    if (message.content.startsWith('/comandos')){
        message.channel.send('Meus comandos são: /twitter - /loja - /ip - /avata - /report ')
    }
    if (message.content.startsWith('/loja')){
        message.channel.send('Em desenvolvimento! ');
    }
});
client.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
 
  let canal = member.guild.channels.find(`name`, "entrada🙋");
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setDescription(`🎈 **Olá ${member}, seja bem-vindo ao Discord oficial da CrownMC**

  » **IP:** CrownMC.reis.host <:infinito:
  » **Twitter:** https://twitter.com/RedeCrownMC`)
  .setThumbnail(member.user.displayAvatarURL)
  canal.send({embed : embed})
});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
    if(cmd === '/vip'){
    message.channel.send('Carregando').then(msg => setTimeout(() => {
        msg.edit('Infelizmente deu erro, tente novamente!');
    }, 8000));
    }
});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
    if(cmd === 'h!say'){
        message.delete();
        message.channel.send(args.join(" "))
}});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
    if(cmd === '/avata'){
let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = member.displayAvatarURL;
    if (avatar.endsWith(".gif")) {
        avatar = `${member.displayAvatarURL}?size=2048`
    }
    message.channel.send({
        embed: {
            title: `${member.tag}`,
            description: `[Link Direto](${avatar})`,
            image: {
                url: avatar
            }
        }
    })
    }});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
    if(message.content.startsWith('/serveinfo')){
        let MembrosOnline = message.guild.members.filter(a => a.presence.status == "online").size;
        let MembrosOcupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let MembrosAusente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let MembrosOffline = message.guild.members.filter(a => a.presence.status == "offline").size;
    
        let statusembed = new Discord.RichEmbed()
        .addField('Membros', `**Online:** ${MembrosOnline} | **Ausente:** ${MembrosAusente} | **Ocupado:** ${MembrosOcupado} | **Offline:** ${MembrosOffline} `) ;
        
        message.channel.send(statusembed);
    }
});
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
if (message.content.includes("https://discord.gg/")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.reply("❌ **Você não pode divulgar aqui!**");
        }

    }
    });
client.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
        if(cmd === '/limpar'){
            if (message.channel.type === "/limpar") return;
            if (message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES')) {
                if (args.length === 0) {
                    return;
                } else if (args.length === 1) {
                    message.channel.fetchMessages({
                        limit: parseInt(args[0]) + 1
                    }).then((messages) => {
                        message.channel.bulkDelete(messages);
                    });
                } else if (args.length === 2) {
                    message.channel.fetchMessages({
                        limit: parseInt(args[0]) + 1
                    }).then((messages) => {
                        let bulkMessages = [];
                        messages.forEach((i) => {
                            if (i.author.id === args[1].replace(/@|<|>/g, "")) {
                                bulkMessages.push(i);
                            }
                        });
                        message.channel.bulkDelete(bulkMessages);
                    });
                }
            }
        }
            });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
