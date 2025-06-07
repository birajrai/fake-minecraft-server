const mc = require('minecraft-protocol');

const server = mc.createServer({
  'online-mode': true,
  host: '0.0.0.0',
  port: 25565,
  version: '1.8'
});

server.on('login', (client) => {
  client.end('§cThis server is MOTD only.\n§7Not joinable.');
});

server.on('listening', () => {
  console.log('✅ Fake Minecraft server is running on port 25565');
});

server.on('error', console.error);
