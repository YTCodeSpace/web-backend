//Import neccessary packages
import { MongoClient } from "mongodb";

//Connection string for MongoDB with the url

// const connectionString = process.env.MONGO_URL || "";
const connectionString =
  "mongodb+srv://rsaDev:rsa995356@cluster0.8p6qwxh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

//Db name in the mongodb
let db = conn.db("opc_machine_sensors_data");
export default db;
