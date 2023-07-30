const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder, Embed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides a list of commands and attributions.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		const HelpEmbed = new EmbedBuilder()
		.setColor('Orange')
		.setTitle('Commands List')
		.addFields(
			{name: "/avatar", value: "Fetches user's avatar, either their own or someone else's 🖼️", inline: true},
			{name: "/ping", value: "Gets the ping of the bot 🏓", inline: true},
			{name: "/server", value: "Fetches server information 📊", inline: true},
			{name: "/user-info", value: "Fetches user's info, either their own or someone else's 🪪", inline: true},
			{name: "/help", value: "This message! 📋", inline: true},
			{name: "/kick", value: `"Kick" someone... 🥾`, inline: true},
			{name: "/prune", value: `Prune up to 99 messages. 🗑️`, inline: true},
			{name: "Attributions", value: `Base code for commands thanks to Discordjs.guide`},
			{name: "Attributions", value: `Based off of dumprr/Sentaku git repo`}
		)
		await interaction.reply({ embeds: [HelpEmbed] });
	},
};