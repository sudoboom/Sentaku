const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Create a poll!')
        .addStringOption(option => option.setName('question').setDescription('The question to ask.').setRequired(true))
        .addStringOption(option =>
            option.setName('emoji')
            .setDescription("What emojis to set the poll")
            .setRequired(true)
            .addChoices(
                { name: "One and Two", value: 'Onetwo' },
                { name: "Yes and No", value: 'Yesno' },
            ))
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
            try { if (interaction.member.permissions.has(PermissionsBitField.Flags.ManageServer)) {
                 console.log('This member can Manage Server'); }
             const Emojis = interaction.options.getString('emoji')
             const body = interaction.options.getString('question')
             const color = interaction.options.getString('color')
             const CustomEmbed = new EmbedBuilder() 
             .setTitle(`Poll Time!`)
             .setDescription(`${body}`)
             .setColor(color)
             if (Emojis === 'Yesno') {
                interaction.reply({ embeds: [CustomEmbed] });
                const message = await interaction.fetchReply();
                message.react('✔️');
                message.react('❌');
            }
            if (Emojis === 'Onetwo') {
                interaction.reply({ embeds: [CustomEmbed]});
                const message = await interaction.fetchReply();
                message.react('1️⃣');
                message.react('2️⃣');
            }
             } catch (error) {
                 {
                    console.log(error)
                 await interaction.reply({ content: "You cannot run this command!", ephemeral: true }) 
                 }
         }
},}