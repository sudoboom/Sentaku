const { SlashCommandBuilder, client } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction, client) {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();
    
        const ping = reply.createdTimestamp - interaction.createdTimestamp;
    
        interaction.editReply(
          `🏓 Pong! ${ping}ms`
        )
	},
};