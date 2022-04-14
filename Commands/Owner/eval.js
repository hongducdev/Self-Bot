module.exports = {
    name: 'eval',
    description: 'Evaluates code',
    run: async (client, message, args) => {
        if (![client.user.id, '769244837030526976'].includes(message.author.id)) return;
        try {
            const code = args.join(' ');
            let evaled = eval(code);
            console.log(evaled);
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
            message.channel.send(evaled);
        } catch (err) {
            console.err
            message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
        }
    }
}
