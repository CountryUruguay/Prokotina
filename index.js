const Discord = require("discord.js");
const { Client } = require("discord.js");
const client = new Client({ intents: 3276799 });


client.on("ready", () => {
    console.log(`Encendido como: ${client.user.tag}`)
});
client.login("MTE5NjEzNjUzMjg0MzY5MjA4Mg.GG3Q3S.ZG75v7sv8TtXD0lKA2-O-H0nn8T0dBGspVfnA")