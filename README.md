# App SocketIO
Aplicación nodejs + express + socket.io + babel + ES6 para realizar procesos por websocket

El proposito del proyecto es realizar notificacines push desde una aplicacion Frontend con Backend.

## Instalación
``` bash
// Instalar todas las dependencias del package.json
npm install
// Instalar de manera global
npm install -g nodemon
npm install -g pm2
pm2 start app.js
pm2 list
```  

## Uso del Repositorio Github
``` bash
// Ejecutar este comando para realizar el deploy de la app nodejs con socketIO
npm run start 
// Ejecutar este comando para realizar el deploy de la app nodejs con socketIO y realizar cambios a su vez
npm run watch
```

## Ejemplos para SocketIO con NodeJS
``` bash
 // sending to sender-client only
 // enviando solo al remitente-cliente
 socket.emit('message', "this is a test");

 // sending to all clients, include sender
 // enviando a todos los clientes, incluir remitente
 io.emit('message', "this is a test");

 // sending to all clients except sender
 // enviando a todos los clientes excepto remitente
 socket.broadcast.emit('message', "this is a test");

 // sending to all clients in 'game' room(channel) except sender
 // enviando a todos los clientes en la sala de 'juego' (canal) excepto el remitente
 socket.broadcast.to('game').emit('message', 'nice game');

 // sending to all clients in 'game' room(channel), include sender
 // enviando a todos los clientes en la sala de 'juego' (canal), incluido el remitente
 io.in('game').emit('message', 'cool game');

 // sending to sender client, only if they are in 'game' room(channel)
 // envío al cliente remitente, solo si están en la sala de "juego" (canal)
 socket.to('game').emit('message', 'enjoy the game');

 // sending to all clients in namespace 'myNamespace', include sender
 // enviando a todos los clientes en el espacio de nombres 'myNamespace', incluido el remitente
 io.of('myNamespace').emit('message', 'gg');

 // sending to individual socketid
 // enviando a socketid individual
 socket.broadcast.to(socketid).emit('message', 'for your eyes only');
```