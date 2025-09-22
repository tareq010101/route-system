const mongoose = require('mongoose');
const Driver =require('./../Models/driverModel')

const routeSchema = new mongoose.Schema({
  startLocation: {
    type: String,
    required: true
  },

  endLocation: {
    type: String,
    required: true
  },

  distance: {
    type: Number,
    required: true
  },

  estimatedTime: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["assigned", "unassigned"],
    default: "unassigned"
  },

  assignedDriver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Driver"
  }
});

const Route = mongoose.model('Route', routeSchema);
module.exports = Route;
