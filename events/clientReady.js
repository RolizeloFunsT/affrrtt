const Discord = require("discord.js");
const client = global.client;
const config = require('../config.json')
const fs = require('fs')

exports.execute = async () => {
    client.user.setPresence({ activity: { name:"WATCHING", "Made By FunsT"}, status: "idle" });
  };

exports.conf = {
  event: "ready"
};