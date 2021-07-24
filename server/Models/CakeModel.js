import mongoose from "mongoose";

const cakeSchema = mongoose.Schema({
  name: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var CakeModel = mongoose.model("CakeMessage", cakeSchema);

export default CakeModel;
