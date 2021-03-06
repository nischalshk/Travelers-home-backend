const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  homeName: {
    type: String,
    required: true
  },
  homeDetail: {
    type: String,
    required: true
  },
  homeCategory: {
    type: String,
    required: true
  },
  homeImage: {
    type: String
  },
  homePrice: {
    type: Number
    
  },
  homeLocation: {
    type: String
  },
  homePerson: {
    type: Number
  },
  homeLat: {
    type: String
  },
  homeLong: {
    type: String
  },
  homeAvail: {
    type: Boolean
  },

   author:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host"
}

});

module.exports = mongoose.model("Home", homeSchema);
