// src/lib/dbConnect.js
import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

if (!process.env.MONGODB_URI) {
  throw new Error("❌ Please add your Mongo URI to .env.local");
}

// Prevent multiple connections in development
if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

/**
 * dbConnect - returns a specific collection from the connected MongoDB database
 * @param {string} collectionName - Name of the collection you want to use
 */
export default async function dbConnect(collectionName) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  return db.collection(collectionName);
}
