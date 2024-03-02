const io= require("socket.io")(8080,{
    cors:{
        origin:["http://localhost:5500","http://127.0.0.1:5500","http://127.0.0.1:5500/ws2/index.html"]
    }
});

io.on("connection", socket => {
    console.log(`${socket.id} connected to ws`);
    //let data="";
    socket.on("message",(data)=>{
        console.log(data);
        socket.broadcast.emit("message",data) // sending the data to other clients apart d=from sender
        
    })

    
    //socket.emit("server-reply","received")
})