import { Schema, model } from 'mongoose';

const studentSchema = new Schema(
  {
 StudentId: {type: String},
 name:{type:String},
 dob:{type:String},
 course: { type: String},
 duration : { type: String},
 passingyear : { type: String},
 imagePath:{  type:String }
  },
);

export default model('student', studentSchema);
