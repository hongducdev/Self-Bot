module.exports = {
    getMember: async function(message, toFind = '', authorReturn = true) {
        if (!toFind) return authorReturn ? message.member : null;
        toFind = toFind.toLowerCase();
        let target = await message.guild.members.fetch({ user: toFind }).catch(() => undefined) || message.guild.members.cache.filter(m => m.displayName == toFind).first();
        if (!target && message.mentions.members) target = message.mentions.members.first();
        if (!target && toFind) {
            target = await message.guild.members.fetch({ query: toFind, limit: 1 });
            target = target.first();
        }
        if (!target) target = authorReturn ? message.member : null;
        return target;
    },

    getChannel: async function(message, toFind, sameChannelReturn = true) {
        if (!toFind) return sameChannelReturn ? message.channel : null;
        let channel = await message.guild.channels.resolve(toFind.startsWith('<#') ? toFind.slice(2, toFind.length - 1) : toFind);
        if (!channel) {
            const listChannel = message.guild.channels.cache.filter(c => c.type == 'text').map(ch => ch.name);
            const matches = findBestMatch(toFind, listChannel);
            if (matches.bestMatch.rating > 0.6) channel = message.guild.channels.cache.find(ch => ch.name == matches.bestMatch.target);
        }
        if (!channel && sameChannelReturn) return message.channel;
        return channel;
    },
};