module.exports = {
  name: 'leave',
  description: 'Leave the voice channel',
  run: async (client, message) => {
    client.distube.voices.leave(message)
  }
}
