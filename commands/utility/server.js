const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		
		const ServerEmbed =  new EmbedBuilder()
		.setColor('Aqua')
		.setAuthor({
			url: `https://github.com/dumprr/Sentaku`,
			name: 'dumprr/Sentaku'
		})
		.setTitle(`Server Info for ${interaction.guild.name}`)
		.setDescription(`This server has ${interaction.guild.memberCount} members.\nOwner: <@${interaction.guild.ownerId}>`)
		if ( interaction.guild.iconURL() == null ) {
		ServerEmbed.addFields(
			{name: 'This server has no icon.', value: `The icon shows: "${interaction.guild.nameAcronym}"`}
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