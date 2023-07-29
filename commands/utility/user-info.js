
const { SlashCommandBuilder } = require('discord.js');
const { AttachmentBuilder, EmbedBuilder, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user-info')
		.setDescription('Provides information about the user.')
        .addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
        const user = interaction.options.getUser('target');
		
		if (user) { const EmbedThing = new EmbedBuilder()
			// const RequestedImage = user.displayAvatarURL
	.setTitle(`User Info For ${user.username}`)
	.setDescription(`They joined the server on undefined`)
	.setFooter({
		text: `Requested by: ${interaction.user.tag}`,
		iconURL: interaction.user.displayAvatarURL(),
	  })
	  .setColor('Blurple');
	  
		 await interaction.reply({ embeds: [EmbedThing] });
		 const channel = client.channels.cache.get('id');
        channel.send(`${user.displayAvatarURL}`);
		} else { const SelfEmbed = new EmbedBuilder()
	.setTitle(`User Info For ${interaction.user.username}`)
	.setDescription(`They joined the server on ${interaction.member.joinedAt}`)
	.setFooter({
		text: `Requested by: ${interaction.user.tag}`,
		iconURL: interaction.user.displayAvatarURL(),
	  })
	  .setColor('Blurple')
		await interaction.reply({ embeds: [SelfEmbed] });
		const channel = client.channels.cache.get('id');
        channel.send(`${interaction.user.displayAvatarURL}`);
		}
	},
};