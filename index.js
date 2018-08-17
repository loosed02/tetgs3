const Discord = require(`discord.js`);
const Enmap = require("enmap");
const fs = require(`fs`);
const auth = require(`./settings/config.json`)
const client = new Discord.Client({
    disableEveryone: false,
    autoReconnect: true
});
client.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
    jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
})
  //Prefix handler
  client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = auth.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

});
    //Events
    client.on('ready', () => require(`./events/ready.js`)(client));    
    client.on('message', message => require('./events/message.js')(client, message));
    client.on('message', message => require('./events/ticket/message.js')(client, message));

client.login(process.env.TOKEN);