const express=require('express')
require('./db/mongoose')
const College=require('./models/college')
const Student=require('./models/student')
//const Info=require('./models/info')
const collegeRouter=require('./routers/college')
// const taskRouter=require('./routers/task')
// const infoRouter=require('./routers/info')
const cors=require('cors')

const app=express()
const port=process.env.PORT

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.get('origin'));
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next();
});


app.use(express.json())
 
app.use(collegeRouter)
// app.use(taskRouter)
// app.use(infoRouter)

app.listen(port,()=>{
    console.log('Server is up on port'+ port)
})


