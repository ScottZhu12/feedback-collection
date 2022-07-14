import { Schema, model } from 'mongoose';

// create an interface representing a document in mongdb
export interface IUser {
  googleId: string;
}

// create a schema corresponding to the document interface
const userSchema = new Schema<IUser>({
  googleId: {
    type: String,
    required: true,
  },
});

// create a model
const userModel = model<IUser>('users', userSchema);

export default userModel;
