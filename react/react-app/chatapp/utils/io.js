const userController = require("../Controllers/user.controller")

module.exports = function(io){
    io.on("connection ", async(socket)=>{
        console.log("client is connected ", socket.id);

        /* App.js에서 socket.emit("login" 로 호출하면 아래에서 받는다. */
        socket.on("login", async(userName, cb) => {
            console.log("backend ", userName);

            try {
                //유저정보를 저장
                const user = await userController.saveUser(userName, socket.id);
                
                //cb = 콜백 함수
                cb({ok:true, data:user})
            } catch (error) {
                cb({ok:false, error:error.message})
            }
        })

        socket.io("disconnect", () => {
            console.log("user is disconnected");
        })
    })
} 