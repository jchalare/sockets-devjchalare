var socket = io();

//los 'on' son para escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//enviar informacion
//el primer parametro es el nombre de la funcion que envia
//el segundo es el objeto, cadena , arreglo etc que se quiere enviar, es decir el contenido
//el tercero es opcional , es una funcion callback 
socket.emit('enviarMensaje', {
    usuario: 'jesus alberto',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});