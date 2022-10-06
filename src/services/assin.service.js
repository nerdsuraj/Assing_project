import people from '../models/assin.model'

//get all users
export const getAllUsers = async () => {
  const data = await people.find();
  return data;
};

export const newUser = async (body) => {
    const data = await people.create(body);
    return data;
  };
  
  export const updatePeople = async (_id, body) => {
    const data = await people.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };