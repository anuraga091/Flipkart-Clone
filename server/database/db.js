import mongoose from "mongoose";

export const Connection= async (username, password) => {
    const URL = `mongodb://${username}:${password}@flipkart-shard-00-00.xecta.mongodb.net:27017,flipkart-shard-00-01.xecta.mongodb.net:27017,flipkart-shard-00-02.xecta.mongodb.net:27017/FLIPKART?ssl=true&replicaSet=atlas-t07sfn-shard-0&authSource=admin&retryWrites=true&w=majority`
  try{
    await  mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log(`Database Connected Successfully`)
  } catch(error){
    console.log(`Error while connecting the database`, error.message);
  }
}
