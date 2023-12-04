import mongoose, { mongo } from "mongoose";

async function conectaDatabase(){
mongoose.connect(
  "mongodb+srv://mark0:@cluster0.gsam2wr.mongodb.net/animes?retryWrites=true&w=majority")
  return mongoose.connection;
}

export default conectaDatabase;
