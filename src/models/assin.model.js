import { Schema, model } from 'mongoose';

const PeopleSchema = new Schema(
  {
   name:{type : String, require : true},
   email:{type : String, require : true},
   dob:{type : String, require : true },
   address:{type : String, require : true},
   country:{type : String, require : true}
  }
);
  


export default model('People', PeopleSchema);