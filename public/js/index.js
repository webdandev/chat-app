const socket = io()

// Templates
joinRoomTemplate = document.querySelector('#join-room-template').innerHTML

socket.on('roomsList', (rooms) => {
  console.log(rooms)  
  const roomNames = rooms.map((room) => ({room: room}))
  const html = Mustache.render(joinRoomTemplate, {roomNames})
  document.querySelector('#rooms').innerHTML = html    
})