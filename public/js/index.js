const socket = io()

// Templates
joinRoomTemplate = document.querySelector('#join-room-template').innerHTML

socket.on('roomsList', (rooms) => {
  //adding encoded rooms
  rooms.push(...addEncodedRooms(rooms, "yes, please, do reinvent the wheel!",
    "js", "20+","general", "react.js","node.js"))  

  const roomNames = rooms.map((room) => ({room: room}))
  const html = Mustache.render(joinRoomTemplate, {roomNames})
  document.querySelector('#rooms').innerHTML = html    
})

const addEncodedRooms = (rooms, ...encodedrooms) => {
  const addThoseRooms = encodedrooms.filter((room) => {
    return rooms.indexOf(room) === -1
  })
  return addThoseRooms  
}