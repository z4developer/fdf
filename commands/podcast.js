const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'подсказка',
    callback: ({ message }) => {
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("**Всплывающая подсказка.**")
            .setDescription(
                `Наведи курсор на подсказку: [(i)](${message.url} "На канале вышло новое видео!")`
            );

        message.channel.send(embed);
    }
}