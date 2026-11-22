import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.URI);
const db = client.db(`${process.env.DBNAME}`); // Use the DBNAME from .env

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword:{
    enabled: true,
  }
});