const Discord = require("discord.js");
const client = new Discord.Client();
const iKhaled = ['403516759228809218','403516759228809218'];


  client.on('message', Khaled => {
    var argresult = Khaled.content.split(` `).slice(1).join(' ');
      if (!iKhaled.includes(Khaled.author.id)) return;
  
      if (Khaled.content.startsWith('Nwt')) {
        client.user.setActivity(argresult, {type:'WATCHING'});
          client.user.setStatus("dnd")
          Khaled.channel.send(` ** Done. :white_check_mark: ** `)
      } else //Khaled 
      if (Khaled.content.startsWith('Nls')) {//Khaled
          client.user.setActivity(argresult , {type:'LISTENING'});
            client.user.setStatus("idle")
            Khaled.channel.send(` ** Done. :white_check_mark: ** `)
      } else //Khaled
          if (Khaled.content.startsWith('Nst')) {
            client.user.setGame(argresult, "https://www.twitch.tv/ikhaled321");
              client.user.setStatus("dnd")
              Khaled.channel.send(` ** Done. :white_check_mark: ** `)//Khaled
      } else 
      if (Khaled.content.startsWith('Npl')) {
        client.user.setActivity(argresult , {type:'PLAYING'});//Khaled
         client.user.setStatus("idle")
         Khaled.channel.send(` ** Done. :white_check_mark: ** `)
       }
  
  });
