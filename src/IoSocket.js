// DOCUMENTACION
// iodata: Es un "objeto"; una variable que es enviada, ya sea desde el Frontend o Backend que ejecuta socketIO-client
// ESTRUCTURA
// iodata: { socket_id: 'xxx', room: 'xxx', data: 'xxx' }
export default {
	load(socket, io){
		this.onDisconnect(socket)
		this.onCreateRoomGeneral(socket ,io)
		this.onGenerateRoomGeneral(socket, io)
	},
	onDisconnect(socket){
		socket.on('disconnect', ()=>{
			console.log('Method: disconnect()')
			socket.disconnect(true)
			console.log('Se ha eliminado el socketID: ' + socket.id)
         console.log("--------------------------------------------------------------------------------------------------------")
		})
	},
	onCreateRoomGeneral(socket, io){
		socket.on('server-create-room-general', (iodata)=>{
			console.log('Method: server-create-room-general()')
			console.log('Params: ' + JSON.stringify(iodata))
			socket.join(iodata.room_general)
			console.info(JSON.stringify(io.sockets.adapter.rooms))
         console.log("--------------------------------------------------------------------------------------------------------")
		})
	},
	onGenerateRoomGeneral(socket, io){
		socket.on('server-generate-room-general', ()=>{
			console.log('Method: server-generate-room-general()')
			socket.emit('client-create-room-general')
         console.log("--------------------------------------------------------------------------------------------------------")
		})
	},
}