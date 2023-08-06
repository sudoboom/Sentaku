const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides a list of commands and attributions.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		let ServerCount = await interaction.client.guilds.cache.size
		const HelpEmbed = new EmbedBuilder()
		.setAuthor({
			url: `https://github.com/dumprr/Sentaku`,
			name: 'dumprr/Sentaku '
		})
		.setColor('Orange')
		.setTitle('Sentaku Commands + More')
		.addFields(
			{name: "---------------------------------------------------------", value: `\n----------------------------------------------------------`, },
			{name: "Server Count", value: `${ServerCount}`, inline: true},
			{name: "---------------------------------------------------------", value: `\n----------------------------------------------------------`, },
			{name: "/avatar", value: "Fetches user's avatar, either their own or someone else's 🖼️", inline: true},
			{name: "/ping", value: "Gets the ping of the bot 🏓", inline: true},
			{name: "/server", value: "Fetches server information 📊", inline: true},
			{name: "/user-info", value: "Fetches user's info, either their own or someone else's 🪪", inline: true},
			{name: "/help", value: "This message! 📋", inline: true},
			{name: "/kick", value: `"Kick" someone... 🥾`, inline: true},
			{name: "/prune", value: `Prune up to 99 messages. 🗑️`, inline: true},
			{name: "/embed-maker", value: `Make a customized embed! (Requires Manage Server permission) 🖨️`, inline: true},
			{name: "---------------------------------------------------------", value: `\n----------------------------------------------------------`, },
			{name: "Attributions", value: `Based off of dumprr/Sentaku git repo`}
		)
	    .setFooter({
			text: `Requested by: ${interaction.user.tag}`,
			iconURL: interaction.user.avatarURL(),
		  })
		await interaction.reply({ embeds: [HelpEmbed] });
	},
};