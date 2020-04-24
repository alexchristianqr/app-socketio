// DOCUMENTACION
// iodata: Es un "objeto"; una variable que es enviada, ya sea desde el Frontend o Backend
// ESTRUCTURA
// iodata: { socket_id: 'xxx', room: 'xxx', data: 'xxx' }
export default {
	load(socket, io) {
		this.onDisconnect(socket, io)
		this.onJoinRoom(socket, io)
		this.leaveAllRooms(socket, io)
	},
	/**
		* Desconectarse de socketIO
		* @param socket
		* @param io
		*/
	onDisconnect(socket, io) {
		socket.on('disconnect', () => {
			console.log('Method: disconnect()')
			socket.disconnect(true)
			console.log('Se ha eliminado el socketID: ' + socket.id)
			console.log("-------------------------------------------------------------")
		})
	},
	/**
		* Crear y unirse a una habitación
		* @param socket
		* @param io
		*/
	onJoinRoom(socket, io) {
		socket.on('server-join-room', (iodata) => {
			console.log('Method: server-join-room()')
			console.log('Params: ' + JSON.stringify(iodata))
			socket.join(iodata.room)
			console.info(JSON.stringify(io.sockets.adapter.rooms))
			console.log("-------------------------------------------------------------")
		})
	},
	/**
		* Salir de todas las habitaciones
		* @param socket
		* @param io
		*/
	leaveAllRooms(socket, io) {
		socket.on('server-leave-all-rooms', (iodata) => {
			console.log('Method: server-leave-all-rooms()')
			console.log('Params: ' + JSON.stringify(iodata))

			let rooms = io.sockets.adapter.sids[iodata.socket_id]
			console.log(JSON.stringify(rooms))
			for (let room in rooms) {
				socket.leave(room)
			}

			console.log("-------------------------------------------------------------")
		})
	},
}
