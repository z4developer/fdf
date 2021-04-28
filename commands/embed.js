const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'rps',
    callback: async({ message, args, client }) => {
        const rps = ['ножницы', 'камень', 'бумага'];
        const res = ['Ножницы :scissors:', 'Камень :rock:', 'Бумага :newspaper:'];
        let userChoice;
        if (args.length) userChoice = args[0].toLowerCase();
        if (!rps.includes(userChoice))
            return message.channel.send(new MessageEmbed()
                .setColor('#ff2400')
                .setAuthor('🧙 ОШИБКА')
                .setThumbnail('https://i.imgur.com/IG8G9ZR.png')
                .setDescription(`Пожалуйста укажите: **бумага, камень, ножницы.**`))
        message.delete()
        userChoice = rps.indexOf(userChoice);
        const botChoice = Math.floor(Math.random() * 3);
        let result;
        if (userChoice === botChoice) result = 'Это ничья!';
        else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = `**jogas
        ** победил!`;
        else result = `**${message.member.displayName}** победил!`;
        const embed = new MessageEmbed()
            .setTitle(`${message.member.displayName} vs. jogas
            `)
            .addField('Твой выбор:', res[userChoice], true)
            .addField(`jogas
            \'s выбор`, res[botChoice], true)
            .addField('Результат', result, true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('#2f3136');
        message.channel.send(embed)
    }
}