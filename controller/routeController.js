const Route=require('./../Models/routeModel')
const Driver =require('./../Models/driverModel')
const Schedual=require('./../Models/ScheduleModel')
const APIFeatures=require('./../utils/ApiFeaturs')
const catchAsync=require('./../utils/catchAsync')

exports.getAllRoutes = catchAsync(async (req, res) => {
const features = new APIFeatures(Route.find(), req.query).paginate();
const routes = await features.query;

res.status(200).json({
    status: 'success',
    results: routes.length,
    data: {
        routes
    }
});
});

exports.createRoute = catchAsync(async (req, res, next) => {
const newRoute = await Route.create(req.body);
const driver = await Driver.findOne({ avilabilty: true });

if (driver) {
    await Schedual.create({
    driver: driver._id,
    route: newRoute._id,
    status: 'active'
    });

    driver.avilabilty = false; 
    driver.currentRoute = newRoute._id;
    await driver.save();

    newRoute.assignedDriver = driver._id;
    await newRoute.save();
} else {
    
    await Schedual.create({
    route: newRoute._id,
    status: 'unassigned'
    });
}

res.status(201).json({
    status: 'success',
    data: {
        route: await Route.findById(newRoute._id).populate('assignedDriver') 
        }
    });
});

