const Driver = require('./../Models/driverModel');
const catchAsync=require('./../utils/catchAsync')

exports.getSchedule = catchAsync(async (req, res, next) => {
const drivers = await Driver.find().populate('currentRoute'); 
res.status(200).json({
    status: 'success',
    data: drivers
    });
});
