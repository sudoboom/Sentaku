# Sentaku
## A basic bot made in Discord.js. Contains some basic commands
### If you use Sentaku, you must credit it as the open source base.
---
# Bugs / To Add
-  Embedmaker and Poll Maker currently needs to catch an error, the BitFieldInvalid error to return the "You cannot run this" message. To remedy this there should be a way to find if the user does or does not have the permission without throwing an error if not. 
- Help command ping stuff weird
---
# How To Set-up
1. Go into your IDE and clone this git repository
2. Install discord.js v14. If you want, you can also install Nodemon. You can do this by just typing `npm install`
3. Go to [Discord Developer Portal](https://discord.com/developers/applications) and make a new application. Click on bot, then click on OAuth2 and select "bot".
4. Add the necessary permissions to your bot in the OAuth2 section and add it to your server.
5. Create a file named "config.json" in the same directory as index.js and put these values in the file:
![image](https://github.com/dumprr/Sentaku/assets/140656627/4e496457-035d-4e14-b336-b0fff66195d4)
6. If you want to globally deploy the commands, (do this before you run the bot) then leave the deploy-commands.js as is and run it. `node deploy-commands.js`
7. If you want to deploy the commands in JUST your server, change this string in the deploy-commands.js:
![image](https://github.com/dumprr/Sentaku/assets/140656627/f026dc03-7891-4004-8daf-f1bd6e12e3fd)
![image](https://github.com/dumprr/Sentaku/assets/140656627/b08827c6-4331-4301-9fa7-94aafcb72bb8)
8. Run `node deploy-commands.js` if you haven't already. It should say "Successfully refreshed slash commands" in the shell terminal.
9. Perfect. Your bot is ready to use! Run `node index.js` to start the bot!

