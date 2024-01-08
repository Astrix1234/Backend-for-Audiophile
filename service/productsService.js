import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const databaseName = process.env.DB_NAME;
const collectionName = process.env.DB_COLLECTION;

const uriDb = process.env.DB_HOST;
const client = new MongoClient(uriDb);

const connectDB = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(databaseName);
};

const getAllProducts = async () => {
  try {
    const database = await connectDB();
    const collection = database.collection(collectionName);
    return await collection.find({}).toArray();
  } catch (err) {
    console.error("Error occurred:", err);
    throw err;
  }
};

export default {
  getAllProducts,
};
