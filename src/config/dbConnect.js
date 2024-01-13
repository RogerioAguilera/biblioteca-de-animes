import mongoose, { mongo } from "mongoose";

async function conectaDatabase(){
mongoose.connect(
  "mongodb+srv:")
  return mongoose.connection;
}

export default conectaDatabase;
