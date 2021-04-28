const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'server',
    callback: async({ message, args, client }) => {
        const { guild, channel } = message

        const sentMessage = await message.channel.send(new MessageEmbed()
            .setTitle(`Сообщество: ${message.guild.name}`)
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL())
            .setDescription(`
                Сообщество: ${message.guild.name}\nУчастников: ${message.guild.memberCount}
                `)
            .setImage('https://cdn.discordapp.com/attachments/830157187111321600/836595357986062386/PicsArt_04-24-06.26.49.png'))

        sentMessage.react('✅')
        sentMessage.react('🛑')

    }
}