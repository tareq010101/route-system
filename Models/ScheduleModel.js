const mongoose=require('mongoose')

const scheduleSchema = new mongoose.Schema({
driver:{
    type: mongoose.Schema.Types.ObjectId ,
    ref:"Driver"
},
route: {
    type : mongoose.Schema.Types.ObjectId,
    ref :"Route"

},
status :{
    type:String,
enum:["active","complete","unassigned"],
defualt:"active"
},
assignedAt:{
    type:Date,
    default:Date.now
},
completedAt:{
    type:Date
},

});

module.exports = mongoose.model("Scheduie",scheduleSchema)