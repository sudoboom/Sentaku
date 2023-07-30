const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed-maker')
		.setDescription('Make your own custom embed!')
		.addStringOption(option => option.setName('title').setDescription('The title of the embed.').setRequired(true))
        .addStringOption(option => option.setName('description').setDescription('The body of the embed.').setRequired(true))
        .addStringOption(option =>
            option.setName('color')
            .setDescription("What color to set the embed")
            .setRequired(true)
            .addChoices(
                { name: "orange", value: 'Orange' },
                { name: "aqua", value: 'Aqua' },
                { name: "blue", value: 'Blue' },
                { name: "blurple", value: 'Blurple' },
                { name: "default", value: 'Default' },
                { name: "fuchsia", value: 'Fuchsia' },
                { name: "gold", value: 'Gold' },
                { name: "green", value: 'Green' },
                { name: "grey", value: 'Grey' },
                { name: "greyple", value: 'Greyple' },
                { name: "light grey", value: 'LightGrey' },
                { name: "luminous vivid pink", value: 'LuminousVividPink' },
                { name: "navy", value: 'Navy' },
                { name: "purple", value: 'Purple' },
                { name: "red", value: 'Red' },
                { name: "white", value: 'White' },
                { name: "yellow", value: 'Yellow' },
                { name: "not quite black", value: 'NotQuiteBlack' },
                { name: "random", value: 'Random' }
            )),
	async execute(interaction) {
        const title = interaction.options.getString('title')
        const body = interaction.options.getString('description')
        const pickedColor = interaction.options.getString('color')
		const CustomEmbed = new EmbedBuilder() 
        .setTitle(`${title}`)
        .setDescription(`${body}`)
        .setColor(pickedColor)
        .setColor(pickedColor)
		return interaction.reply({ embeds: [CustomEmbed] });
	},
};