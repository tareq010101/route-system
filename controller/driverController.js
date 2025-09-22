const Driver = require('./../Models/driverModel')
const Schedule=require('./../Models/ScheduleModel')
const catchAsync=require('./../utils/catchAsync')

exports.addDriver =catchAsync(async(req,res,next)=>{
    const driver = await Driver.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            driver
        }
    })
})

exports.getDriverHistory = catchAsync(async (req, res, next) => {
const driverId = req.params.id;
const history = await Schedule.find({ driver: driverId }).populate('route')

res.status(200).json({
    status: 'success',
    results: history.length,
    data: {
    history
    }
});
});

