module.exports = {
    name: 'link',
    callback: async({ message }) => {
        var user = message.author;
        message.guild.fetchInvites()
            .then(invites => {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for (var i = 0; i < userInvites.length; i++) {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                message.reply(`У тебя ${userInviteCount} приглашений.`);
            })
    }
}