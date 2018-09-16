const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: `» IP: minigames.redeghost.com `, type: 1, url: 'https://www.youtube.com/yRecky'} });
    console.log('Logado');
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
let args = message.content.split(" ").slice(1);
if(cmd === '/anuncio'){
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
bot.on('message', message => {
    if (message.content === 'Oi') {
    	message.reply('Olá, tudo bem ?');
    }
    if (message.content === 'piga'){
        message.reply('pong');
  	}
    if (message.content.startsWith('/twitter')){
        message.channel.send('Twitter:  https://twitter.com/ServidoresGhost');
    }
    if (message.content.startsWith('/ip')){
        message.channel.send('Nosso ip é: minigames.redeghost.com.');
    }
    if (message.content.startsWith('/comandos')){
        message.channel.send('Meus comandos são: /twitter - /loja - /ip - /avata - /report ')
    }
    if (message.content.startsWith('/loja')){
        message.channel.send('Aqui está: http://www.redeghost.com/');
    }
});
bot.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
 
  let canal = member.guild.channels.find(`name`, "📥entrada");
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(randomColor)
  .setDescription(`🎈 **Olá ${member}, seja bem-vindo ao Discord oficial da Rede Ghost!**

  » **IP:** minigames.redeghost.com
  » **Twitter:** https://twitter.com/ServidoresGhost
  » **Loja:** http://www.redeghost.com/loja
  » **Site:** https://www.redeghost.com/`)
  .setThumbnail(member.user.displayAvatarURL)
  canal.send({embed : embed})
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
    if(cmd === '/vip'){
    message.channel.send('Carregando').then(msg => setTimeout(() => {
        msg.edit('Infelizmente deu erro, tente novamente!');
    }, 8000));
    }
});
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
    if(cmd === '/say'){
        message.delete();
        message.channel.send(args.join(" "))
}});
bot.on('message', message => {
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
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
const args = message.content.split (" ").slice(1);
    if(cmd === '/report'){
        if (message.mentions.users.size  == 0) return message.reply('Mencione alguém.')
if (!args.slice(1).join(' ')) return message.reply('Diga o motivo da denuncia! use /denuncia (usuario) (motivo).')
var canal = message.guild.channels.find("name", "reports");
if (!canal) return;
canal.send({embed:{
    'title':'Denuncia',
    'description':args.slice(1).join(' '),
    'thumbnail':{
        'url':message.mentions.users.first().avatarURL
    }
    ,'footer':{
        'text':'Denuncia enviada por: ' + message.author.tag
    },
    'color':message.member.displayColor
}})
message.reply('Sua denuncia foi enviada com sucesso!')
    }});
bot.on('message', message => {
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
bot.on('message', message => {
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
bot.on('message', message => {
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
bot.on('message', message => {
    let arraymsg = message.content.split(" ");
let cmd = arraymsg[0].toLowerCase()
    const args = message.content.split (" ").slice(1);
    if(cmd === '/corrida'){
        let user = message.mentions.users.first();
        if (!user) return message.reply('**Você não mencionou o usuario que você quer correr!**').catch(console.error);
        const Corrida = "<@" + message.author.id + ">" 
        const corrida2 =  " <@" + user.id + ">"
        var falas = [" fez **200** metros 🏎 ....."," fez **500** metros 🏎 ..........."," fez **800** metros 🏎 .............."," fez **1000** metros 🏎 ................."," fez **1500** metros 🏎 ............................","Explodiu 🔥 ","Bateu e pegou fogo 🔥" ]
        message.channel.send({
            "embed": {
                "title": "🏎 Corrida",
                "description": " O " + Corrida + " e" +  corrida2 + " **estao disputando uma corrida**" ,
                "color": "65535",
                
                "fields": [
                    {
                        "name":"Sobre a corrida:",
                        "value":  "O " + Corrida +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + corrida2 +  "\n" + falas[Math.round(Math.random() * falas.length)],
                        "inline": false
                      }
                  ]
              }
          })
        }
    });
bot.on('guildMemberAdd', member => { 
    
  let embed = new Discord.RichEmbed()
.addField("Clique no emoji abaixo para completar a verificação!", " https://litaricy-shop.com @LitaricyShop_")
.setColor('#FF0000')
.setAuthor(`Litaricy - Verificação`, 'https://cdn.discordapp.com/attachments/444957023130353674/462671084907528213/460264772869554176.gif')
.setTimestamp();



member.guild.channels.get('484143925041430558').send(`** ** ` + `<@` + member.user.id  + `>`);

member.guild.channels.get('484143925041430558').send(embed).then(cona=> {
  cona.react('⭕')
})
 

  })




client.on('messageReactionAdd', (reaction, user) => {
  if(reaction.emoji.name === "⭕" && user.id !== client.user.id) {
       reaction.remove(user)
       client.guilds.get("484143925041430558").members.get(user.id).addRole('484143925041430558')
       client.guilds.get('484143925041430558").members.get(user.id).removeRole('484143925041430558')
       
  }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
