const Discord = require("discord.js");
const { Client } = require("discord.js");
const client = new Client({ intents: 3276799 });


client.on("ready", () => {
    console.log(`Encendido como: ${client.user.tag}`)
});
client.login("TOKEN")
