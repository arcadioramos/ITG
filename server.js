const express = require("express");
const app = express();
const usersRoute = require("./routes/usersRoute");

app.use("/users/",usersRoute);

app.listen(3001, ()=>{
    console.log("Express server está corriendo en port 3001");
})