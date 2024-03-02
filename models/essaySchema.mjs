import mongoose from "mongoose";

//essaySchema
const essaySchema = new mongoose.Schema({
  topic: {
    tName: String,
    tCount: Number,
    required: true,
    min: 1,
  },
  group: {
    gName: String,
    gAward: Number,
    required: true,
  },
});

export default mongoose.model('Mongodb database application', essaySchema);
