const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_17_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYwLFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDU4LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDksXG4gICAgICAgIDU4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRVc3dSeHkrc0FMdGpJaUErS1hscEpHYjdYcWluNEdPYmFCdit1VlI1aFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdoaTVGanFBUmhTaGJMZXY2UlAtOFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVmZjQzMjEtZjg2OS00ZTI3LTkxZGEtYzQ4NDBkYjAyNjI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDI3LFxuICAgICAgMTkxLFxuICAgICAgMjE0LFxuICAgICAgMTQ0LFxuICAgICAgMzMsXG4gICAgICA1MyxcbiAgICAgIDE4MCxcbiAgICAgIDY3LFxuICAgICAgNDQsXG4gICAgICAxOTYsXG4gICAgICA3OSxcbiAgICAgIDQ2LFxuICAgICAgMTM3LFxuICAgICAgOTMsXG4gICAgICAyMzAsXG4gICAgICA3LFxuICAgICAgMjEzLFxuICAgICAgMjQ3LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMjQsXG4gICAgICAxNjgsXG4gICAgICAxNDksXG4gICAgICA3LFxuICAgICAgMTI2LFxuICAgICAgNzYsXG4gICAgICA2MSxcbiAgICAgIDEwOSxcbiAgICAgIDIwOCxcbiAgICAgIDIwNSxcbiAgICAgIDg3LFxuICAgICAgMTI0LFxuICAgICAgNzYsXG4gICAgICA5MSxcbiAgICAgIDc4LFxuICAgICAgODEsXG4gICAgICAyNTQsXG4gICAgICAxMTYsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVpNTE41NzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0NTI1NjQzNjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MjA3NDQxNjY0NDI1NDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QRmxXc1EwT3ZadXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUVIzbERXZkJPNHdHN2orVWFtWmdqbThEVHBwQjBJQmdEaWdsQVZjeEdIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI5MXRSaDB3akNtbmd3NnBXVVJmekx1SzJSK1cwSFB3aUJSaEo4b1VNbjgzM3VGTFIveDk2ZERqbFlsdlB0U2J5SHVYRGRrZ0t1VjdCVVJoVDBpK0pBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXa0V4clpBRXRRaFo3djVwYUkxbno4ekN0T1cvWVZKZk8wL2pPeVlaMDhSbDh3Qi9pN2NCQ3hpYTI3N0FwNnJ6NnpnZGpyNHYyV0hzbDNvMUtSdHFDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNDUyNTY0MzY6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTgxNjY1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtuQVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS25BLmpzb24iOiAie1wia2V5RGF0YVwiOlwia1NGZlhwRld5bk9SdVNsa0RhS2I3Z1lyeDdoZWo5WG1rZUZWUE5Ub1RNYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjQ3NDgyMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU4MTY2NDUxNzNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
