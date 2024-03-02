import mongoose from "mongoose";

//essaySchema
const essaySchema = new mongoose.Schema({
  topic: {
    tName: String,
    tCount:Number,
    required: true,
    min: 1,
  },
  group: {
    gName: string,
    gAward: number,
    required: true,
  },
  });

export default mongoose.model("Fruits", fruitSchema);
