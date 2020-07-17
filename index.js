const VkBot = require('node-vk-bot-api');

const asoi = new VkBot(process.env.TOKEN);

asoi.command(/\/привет бот/i,(ctx) => {
    ctx.reply("Та пошёл ты!");
});

asoi.startPolling();
