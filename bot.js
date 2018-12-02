const Discord = require("discord.js");
const client = new Discord.Client();
var bot = client
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const YouTube = require('simple-youtube-api');
const path = require('path');
const ffmpeg = require('ffmpeg-binaries');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyC2DG1Ilg9WJ8s7_05swukrLAdpeV7_K5U");
global.queue = new Map()

require('./util/eventLoader')(client);

bot.on("ready", guild => {
  bot.user.setActivity('!!yardım - irfansonmez.com.tr', { type: 'LISTEDIN'  })
.then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
.catch(console.error);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + bot.channels.size + ` adet kanala, ` + bot.guilds.size + ` adet sunucuya ve ` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log("Bağlandım!")
});


var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.login(ayarlar.token);
bot.login(process.env.TOKEN); //değiştirmeyin.
