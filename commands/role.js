const DiscordJS = require('discord.js')
module.exports = {
    name: 'gol',
    callback: async({ message, args, client }) => {
        let question = args.join(' ')
        if (!question) {
            message.channel.send(new DiscordJS.MessageEmbed()
                .setColor('#ff2400')
                .setAuthor('🧙 ОШИБКА')
                .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
                .setDescription(`Пожалуйста напишите вопрос.`))

        } else {
            const { guild, channel } = message
            const sentMessage = await message.channel.send(new DiscordJS.MessageEmbed()
                .setTitle(`Голосовалка`)
                .setAuthor(`${message.member.displayName}`)
                .setThumbnail(message.author.displayAvatarURL())
                .setColor('RANDOM')
                .setDescription(`${question}`)
                .setImage('https://cdn.discordapp.com/attachments/830157187111321600/836595357986062386/PicsArt_04-24-06.26.49.png'))
            sentMessage.react('✅')
            sentMessage.react('🛑')
        }
    }
}