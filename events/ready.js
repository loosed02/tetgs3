const Discord = require('discord.js');
const chalk = require(`chalk`);
const log = console.log;
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
module.exports = async(client, message) => {
    //Bot startup information
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    console.log();
    log(chalk.gray("————————————————————————————————————————————————"));
    log(chalk.red("Prefix:") + chalk.white(" -"));
    log(chalk.red("Developer:") + chalk.white(" MrZeke"));
    log(chalk.red("Version:") + chalk.white(" v1.0"));
    log(chalk.red("Name:") + chalk.white(" TheOrigin Bot"));
    log(chalk.red("Users:") + chalk.white(` ${client.users.size} users`));
    log(chalk.red("Guild:") + chalk.white(` ${client.guilds.size} guilds`));
    log(chalk.red("Channels:") + chalk.white(` ${client.channels.size} channels`));
    log(chalk.gray("————————————————————————————————————————————————"));
    //Activity
    client.user.setActivity(`${client.users.size} users`, { type: "WATCHING"});
    //Status
    client.user.setStatus("online");


};
