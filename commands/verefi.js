const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'v',
    callback: async({ message, args, client }) => {
        let question = args.join(' ')
        if (!question) {
            message.channel.send(new MessageEmbed()
                .setColor('#ff2400')
                .setAuthor('🧙 ОШИБКА')
                .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
                .setDescription(`Админ айди роли!!!!`))
        } else {
            const { guild, channel } = message
            const sentMessage = await message.channel.send(new MessageEmbed()
                .setTitle(`📘верефикация📘`)
                .setColor('#d64w46')
                .setDescription(`
            📘верефикация📘
            Нажми ✅ +
            Нажми 🛑 -`)
                .setImage('https://cdn.discordapp.com/attachments/830157187111321600/836595357986062386/PicsArt_04-24-06.26.49.png'))
            sentMessage.react('✅')
            sentMessage.react('🛑')
            const check = '✅'
            const check2 = '🛑'
            const film = (reaction, user) => (check.includes(reaction.emoji.name)) && user.id === user.id && !user.bot
            const film2 = (reaction, user) => (check2.includes(reaction.emoji.name)) && user.id === user.id && !user.bot
            const a = sentMessage.createReactionCollector(film);
            const b = sentMessage.createReactionCollector(film2);


            a.on('collect', (reaction, user) => {
                if (reaction.emoji.name === check) {

                    message.guild.members.cache.get(user.id).roles.add(`${question}`)
                    message.channel.send('Видана роль @📘верефицирований📘 ! ✅')

                }



            })
            b.on('collect', (reaction, user) => {
                if (reaction.emoji.name === check2) {

                    message.channel.send('Нужно обезательно верфецироваться !! 🛑')
                }



            })
            a.on('end', () => console.log(` ${message.author}`))
            b.on('end', () => console.log(` ${message.author}`))




        }
    }
}