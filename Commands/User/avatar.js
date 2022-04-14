const Discord = require('discord.js-selfbot-v13');
const { getMember } = require('../../function/utils')
module.exports = {
    name: 'avatar',
    aliases: ['ava', 'avt'],
    description: 'Get your avatar',
    run: async (client, message, args) => {
        const member = await getMember(message, args.join(' '));

        const serverAvatar = member.avatar && `https://cdn.discordapp.com/guilds/${message.guild.id}/users/${member.id}/avatars/${member.avatar}.png?size=512`

        const w = new Discord.WebEmbed({
            shorten: false,
            hidden: false
        }) 

        w.setTitle(`${member.user.username}'s avatar`)
        w.setImage(serverAvatar || member.user.displayAvatarURL({ dynamic: true, size: 1024 }))
        w.setColor(member.displayHexColor)

        message.channel.send({ embeds: [w] })
    }
}