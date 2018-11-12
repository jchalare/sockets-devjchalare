const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    })

    //escuchar cliente osea un 'on'
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if (mensaje.usuario) {
            callback({
                resp: 'Todo bien como el pibe'
            });
        } else {
            callback({
                resp: 'Todo mal'
            });
        }*/

    });

});