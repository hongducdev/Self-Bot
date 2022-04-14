module.exports = {
    name: 'ping',
    description: 'Ping',
    // Add some data here
    run: async (client, message, args) => {
        message.channel.send('Pinging...').then(m => {
            m.edit(`Pong!\nAPI Latency: ${m.createdTimestamp - message.createdTimestamp}ms\nBot Latency: ${Math.round(client.ws.ping)}ms`);
        });
    }
}