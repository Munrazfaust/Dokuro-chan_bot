const Discord = require("discord.js");
const client = new Discord.Client();
const configuration = require("./config.json");

//
const restrictedWords = "glorioso";
client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.includes( restrictedWords)) {
    // message.channel.send( client.user +" te voy a bannear " + message.author);
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("-Usuario Pateado-")
    .setColor("#E51A4C")
    .addField("Usuario: " + message.author.username + " a sido pateado del servidor"  )
    .addField("Pateado por "+ client.username )
    .addField("Hora: " + message.createdAt)
    .addField("Motivo: " + message.content);
 
    let kChannel = message.guild.channels.find('name', "top-secret");
    kChannel.send(kickEmbed);
    
    message.guild.member(message.author).kick("");
   
  }

});

client.login(configuration.token);