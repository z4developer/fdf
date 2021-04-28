const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'rep',
    description: 'Tells you answers!',


    callback: async({ message, args, client, member, }) => {
        let question = args.join(' ')
        if (!question) {
            message.channel.send(new MessageEmbed()
                .setColor('#ff2400')
                .setAuthor('🧙 ОШИБКА')
                .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
                .setDescription(`Пожалуйста напишите вопрос.`))

        } else {
            const sentMessage = await message.channel.send(new MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Предложения!!!')
                .setAuthor(`${message.member.displayName}`)
                .setThumbnail(message.author.displayAvatarURL())
                .setDescription(`${question} `, `https: //acegif.com/wp-content/gif/thinking-emoji-21.gif`)
                .setImage('https://cdn.discordapp.com/attachments/830157187111321600/836595357986062386/PicsArt_04-24-06.26.49.png')
                .setTimestamp()
                .setFooter(`Спасибо за предложения!!!!`))

            sentMessage.react('✅')
            sentMessage.react('🛑')

        }
    }
}