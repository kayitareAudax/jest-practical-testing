const express=require("express");
const app=express();
const studentRoutes=require("./routes/studentRoutes")
const PORT=process.env.PORT ||5000
app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})
//use of routes;
app.use(express.json())
app.use("",studentRoutes)