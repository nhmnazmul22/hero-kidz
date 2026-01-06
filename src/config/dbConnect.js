import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export const connectDB = async () => {
  if (cachedClient && cachedDb) return cachedDb;

  const client = new MongoClient(process.env.DATABASE_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  const db = client.db(process.env.DB_NAME);

  console.log("MongoDB Connected");

  cachedClient = client;
  cachedDb = db;
  return db;
};

export const collections = {
  PRODUCTS: async () => (await connectDB()).collection("products"),
  USERS: async () => (await connectDB()).collection("users"),
};
