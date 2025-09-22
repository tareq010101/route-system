const express=require('express')
const rouetController=require('./../controller/routeController')

const router=express.Router();


router.route('/').get(rouetController.getAllRoutes)
.post(rouetController.createRoute)

module.exports = router;