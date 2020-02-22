module.exports = (io) => {

    var numUsers = 0;
    var addedUser = false;

    io.on('connection', (socket) => {
        socket.on('add user', (username) => {
            if (addedUser) return;
            socket.username = username;
            ++numUsers;
            addedUser = true

            socket.emit('login', {
                numUsers: numUsers
            })

            socket.broadcast.emit('user joined', {
                username: username,
                usernameId: socket.id,
                numUsers: numUsers
            })
        })

        socket.on('new message', (data) => {

            if (data.idsocket != '') {
                io.to(data.idsocket).emit('new message', {
                    username: socket.username,
                    usernameId: socket.id,
                    message: data.message
                })
            } else {
                socket.broadcast.emit('new message', {
                    username: socket.username,
                    usernameId: socket.id,
                    message: data.message
                })

            }
        })

        socket.on('typing', (typing) => {
            socket.broadcast.emit(typing, {
                username: socket.username
            })
        })

        socket.on('stop typing', () => {
            socket.broadcast.emit('stop typing', {
                username: socket.username
            })
        })

        socket.on('disconnect', () => {
            if (addedUser) {
                --numUsers;

                socket.broadcast.emit('user left', {
                    username: socket.username,
                    numUsers: numUsers
                })
            }
        })



    })

}