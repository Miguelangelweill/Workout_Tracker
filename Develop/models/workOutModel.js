const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkOutSchema = new Schema({
  // CODE HERE
  name: {
    type: String,
    trim: true,
    unique:true,
    required: "The exercise must have a name."
  },
  type: {
    type: String,
    trim: true,
    required: "There must be a type of exercise."
  },
  weight: {
    type: Number,
    trim: true,
    default:0
  },
  sets: {
    type: Number,
    trim: true,
    default:0
  },
  reps: {
    type: Number,
    trim: true,
    default:0
  },
  duration: {
    type: Number,
    trim: true,
    default:0
  },
  distance: {
    type: Number,
    trim: true,
    default:0
  },
  workOutCreatedAt: {
    type: Date,
    default: Date.now()
  },
  completed:{
      type:Boolean,
      default:false
  }
});

const WorkOut = mongoose.model("WorkOut", WorkOutSchema);

module.exports = WorkOut;
