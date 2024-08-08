const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://miracle32669:M3264@elisa.ckwel6h.mongodb.net/?retryWrites=true&w=majority&appName=Elisa"
global.port= process.env.PORT || 5000
global.email = 'miracle32669@outlook.com'
global.github = 'https://github.com/M3264/Mirage-Md'
global.location = 'Nigeria'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347013159244'
global.devs = '2347013159244';
global.website = 'https://github.com/M3264/Mirage-Md' //wa.me/+23400000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/f5945740d07991c7ae698.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'ᴹᶦʳᵃᵍᵉ' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'M3264' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktLUXEwSy9uQ0pPQnkzTVVVRjdPenJNTnV6MzYyMThKZjBJbGozbFluQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTFKTUhSeExiSUE3cFp3eTdyMGZVdXM0TFVMbW0vWGYxYjR4TUNYQ2xHRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRFdPMHg4Y1pqRS8wNWNwUjZBcno5STdieUZXZ0tDc2RiTWdOU1hQVUcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvdnlUT0RBSlFQKzdxWkhKS0JEQTVZY3dxdDJHNWwvbUZ1Z1NwK2J1Mmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKZU1MaEdrb3pEMXpNYkp1Zm9NMlJROW04R25DcTQwckpERlFrOXlBRVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktiZThQVWtyOHJRVW5EUTgwbGZNU0dEQ3RlSHNBeUNOQi9Ib1RHOTdKVlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUtFcUh0N05MUW9hU002dkkycFNZelBFcElWTTZOVk52NzdaNFpRUDVVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1FNNFZSeEw3NnFIcWVJN01hMTZleUVpNUlyM2gzT0dQcE84eDZUdWN3UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZKT1VLVHZQYmQrR29YZGpmM1J1Q1VFYWlvWEZyNFRKeC9aTzBicUpuaCswYmtiUHp3QXNoUnpqejVlK1FmWVA2Qm9pMGFyVlJEMnlPWERMT2hGdkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODUsImFkdlNlY3JldEtleSI6ImYvWTJXVlBKQlhMcHFjaUJqZ1dMcytzU0VieWRPY2hPTFRkdEJiSkFmMXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImR3TGZqTXVEUWFDcGIwd1gySXZoaXciLCJwaG9uZUlkIjoiMWUxMTFhY2EtZTM3Ni00MzRmLTgxMTEtZjljYzk4NjYwZGE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRwcnZjbHpmblg4UGpHdnl6VkdVSWNiTUczZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLYnNGcXFnVUFTS29SWU5BM3l0Z0YyNExGNTQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEgzVDc4NEsiLCJtZSI6eyJpZCI6IjIzNDcwMTMxNTkyNDQ6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4ZWZ4oGgKOKBoMKg4oGgwqDigaDigKLigaDCoOKBoOKAv+KBoMKg4oGg4oCi4oGgwqDigaDCoOKBoCnigaDhlZcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04rNW1KWUdFTDZGMDdVR0dCc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZTZnp5SFFXbXFmbWVnSGRvdXpYRXhBbDM2MGUrd2lKVXZGcThvNlp6RzQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5laW5nUU45dlFDOUszYzBxc0g4ZFJ3Y1NhWGIyWVR5ejB5bTZHTUtSNFc4cGdzay9aNkRORmhYYmJlV2FxOFhVS1BUVmFUaGIzZmZqRmpjNWc0RERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0aTZDZWJKOEVVRHluK1JjRjZkVW1XYXVRSG1Pby9vaEhPamd5U0RGY1h5c1FMYld4MFluT3JtS2ZYT3NseTh5eVRPQ1YrNTJOYjlmWS9TYmZiWTlEQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTMxNTkyNDQ6MjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjBuODhoMEZwcW41bm9CM2FMczF4TVFKZCt0SHZzSWlWTHhhdktPbWN4dSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzEyMjM4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOMlYifQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'M3264' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Mirage-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'true' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? 'true' : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? 'true' : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? [','] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '`Hallo👋 Mirage-Md is Alive $ Active`' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.1' : process.env.VERSION,
  LANG: process.env.THEME|| 'MIRAGE',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
