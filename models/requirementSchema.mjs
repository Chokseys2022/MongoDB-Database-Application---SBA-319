import mongoose from "mongoose";
import { boolean } from "webidl-conversions";
//import { boolean } from "webidl-conversions";

//requirementSchema
const requiremntSchema = new mongoose.Schema({
  reqLetRec: {
    recommenderName: String,
    LetterRec: Boolean,
    required: true,
  },
  reqGpa: {
    gpa: number,
    graduatingYear: Number,
    transcript: Boolean,
    required: true,
  },
});

export default mongoose.model("Mongodb database application", requirementSchema);
