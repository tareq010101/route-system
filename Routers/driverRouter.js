const express=require('express')
const driverController=require('./../controller/driverController')
const router=express.Router()

router.route('/')
.post(driverController.addDriver)

router.route('/:id')
.get(driverController.getDriverHistory);

module.exports = router;