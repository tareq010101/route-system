const express=require('express')
const schedualController=require('./../controller/schedualController')
const router =express.Router()

router.route('/')
.get(schedualController.getSchedule)


module.exports=router