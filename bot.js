const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("517101519628402702");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**:fallen_leaf: __#-Bienvenue à ~ Venom__ :black_heart: :comet: . **`), 4000)        
}
});

bot.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
