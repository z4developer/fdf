const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'ball',
    description: 'Tells you answers!',


    callback: async({ message, args, client }) => {
        let question = args.join(' ')
        if (!question) {
            message.channel.send(new MessageEmbed()
                .setColor('#ff2400')
                .setAuthor('🧙 ОШИБКА')
                .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
                .setDescription(`Пожалуйста напишите вопрос.`))
            message.delete()
        } else {
            let responses = [
                '`Даже не думай.`',
                '`Не надейся на это.`',
                '`Это возможно.`',
                '`Определенно - да.`',
                '`Быть может.`',
                '`Да, но позднее.`',
                '`Лучше вам пока этого не знать.`',
                '`Да.`',
                '`Нет.`',
                '`Кто знает?`',
                '`Слишком рано.`',
                '`Туманный ответ, попробуй еще.`',
                '`Ты шутишь?.`',
                '`Я не уверен.`',
                '`Не сейчас.`',
                '`Забудь об этом.`',
                '`Не делай этого.`',
                '`Даже не думай.`',
                '`Конечно, да.`',
                '`Ни в коем случае.`',
            ]
            let Response = responses[Math.floor(Math.random() * (responses.length))]
            let Embed = new MessageEmbed()
                .setColor(0x4caf50)
                .setAuthor(`Шар предсказаний`)
                .setThumbnail('https://i.imgur.com/RzW8JtI.png')
                .setDescription(`${Response}`)
                .setImage('https://cdn.discordapp.com/attachments/830157187111321600/836595357986062386/PicsArt_04-24-06.26.49.png')
            message.channel.send(Embed)
        }
    }
}