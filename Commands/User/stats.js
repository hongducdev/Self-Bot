const { version } = require('discord.js-selfbot-v13');

module.exports = {
    name: 'stats',
    description: 'Stats',
    run: async(client, message) => {
        message.channel.send(`
            - discord.js-selfbot-v13 ver: ${version}\n- Uptime: <t:${parseInt(client.readyTimestamp /1000)}:R>`)
    }
}