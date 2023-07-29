const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Provides a list of commands and attributions.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply("```This is literally the Discord.js guide lmao,\nrepackaged by Dumprr, I will add more commands later\nCommands:\n---\nModeration:\n/kick - Kick someone\n/prune - prune up to 99 messages\n---\nUtility:\n/avatar - Gets the user's avatar\n/user - Gives info about user running command or added user\n/server - Gives server info\n/ping - Shows ping\n/help - this!```");
	},
};