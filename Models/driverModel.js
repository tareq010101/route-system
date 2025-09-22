const mongoose=require('mongoose')
const driverSchema = new mongoose.Schema({
    id: {
    type: String,
    required: [true, 'Driver ID is required'],
    unique: true  
},
name:{
    type:String,
    required:true
},
licenseType: {
    type: String,
    enum: ['Light','Medium', 'Heavy'],
    required:true
},
avilabilty: {
    type: Boolean,
    default: true
},
currentRoute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Route',
    default: null
}
});

driverSchema.pre('save', function(next) {
    if (this.currentRoute && this.availability === true) {
    this.availability = false; 
}
    next();
});

const Driver = mongoose.model("Driver",driverSchema)
module.exports = Driver