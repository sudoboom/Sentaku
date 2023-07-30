
const { SlashCommandBuilder } = require('discord.js');
const { AttachmentBuilder, EmbedBuilder, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Provides information about the user.')
        .addUserOption(option => option.setName('target').setDescription('The user\'s info to show')),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        const user = interaction.options.getUser('target');
		const member  = interaction.options.getMember('target');

		if (user) { const EmbedThing = new EmbedBuilder()
			// const RequestedImage = user.displayAvatarURL
	.setTitle(`User Info For ${user.username}`)
	.setDescription(`They joined the server on ${member.joinedAt}`)
	if (user.avatarURL() != null ) {
	EmbedThing.setThumbnail(`${user.avatarURL()}`)
	}
	if (user.avatarURL() == null ) {
	EmbedThing.setThumbnail(`${user.displayAvatarURL()}`)
	}
	EmbedThing.setFooter({
		text: `Requested by: ${interaction.user.tag}`,
		iconURL: interaction.user.avatarURL(),
	  })
	  .setColor('Blurple');
	  
		 await interaction.reply({ embeds: [EmbedThing] });
		} else { const SelfEmbed = new EmbedBuilder()
	.setTitle(`User Info For ${interaction.user.username}`)
	.setDescription(`They joined the server on ${interaction.member.joinedAt}`)
	if (interaction.user.avatarURL() != null ) {
		SelfEmbed.setThumbnail(`${interaction.user.avatarURL()}`)
	}
	SelfEmbed.setFooter({
		text: `Requested by: ${interaction.user.tag}`,
		iconURL: interaction.user.avatarURL(),
	  })
	  .setColor('Blurple')
		await interaction.reply({ embeds: [SelfEmbed] });
		}
	},
};