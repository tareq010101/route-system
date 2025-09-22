const express =require('express')
const app = express()
app.use(express.json());



const routeRouters =require('./Routers/routeRouter')
const driverRouter=require('./Routers/driverRouter')
const schedualRouter=require('./Routers/scheduleRouter')


app.use('/api/v1/route', routeRouters);
app.use('/api/v1/driver',driverRouter);
app.use('/api/v1/schedual',schedualRouter)
module.exports=app;