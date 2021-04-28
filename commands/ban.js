const Discord = require('discord.js');


module.exports = {
    name: "qr",
    aliases: ["qrcode"],


    callback: async({
        client,
        message,
        args
    }) => {

        let link = args.join(' ')
        let qrlink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`

        if (!link) {
            return message.channel.send(` Please provide a link !`)

        }
        if (require('is-url')(link)) {
            message.delete()
            const attachment = new Discord.MessageAttachment(qrlink, 'qrcode.png');

            const embed = new Discord.MessageEmbed()
                .setTitle('Successfully Generated QR Code!')
                .attachFiles(attachment)
                .setColor("GREEN")
                .setImage('attachment://qrcode.png')
                .setFooter(`Executed By ${message.author.tag}`)
                .setTimestamp()

            message.channel.send(embed)

        } else {
            message.channel.send(`Error provide a valid link which contains \`https://\``)
        }
    }
}