const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction, client) {
		// interaction.guild is the object representing the Guild in which the command was run
		
		
		const ServerEmbed =  new EmbedBuilder()
		.setColor('Aqua')
		.setAuthor({
			url: `https://github.com/dumprr/Sentaku`,
			name: 'dumprr/Sentaku'
		})
		.setTitle(`${interaction.guild.name}`)
		.setDescription(`Server Info!`)
		.addFields(
			{name: "Members", value: `${interaction.guild.memberCount}`, inline: true},
			{name: "Owner", value: `<@${interaction.guild.ownerId}>`, inline: true},
		)
		if ( interaction.guild.iconURL() == null ) {
		ServerEmbed.addFields(
			{name: 'No Server Icon...', value: `The icon shows: "${interaction.guild.nameAcronym}"`}
		)
		}
		ServerEmbed.setFooter( {
			text: `Requested by ${interaction.user.username}`,
			iconURL: interaction.user.avatarURL(),
		})
		if ( interaction.guild.iconURL() != null ) {
		ServerEmbed.setThumbnail(`${interaction.guild.iconURL()}`)
		}
		await interaction.reply({ embeds: [ServerEmbed] });
	},
};