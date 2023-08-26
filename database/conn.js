import mongoose from "mongoose";
import ENV from "../config.js";

export default async function connect() {
  mongoose.set("strictQuery", true);
  const database = await mongoose.connect(ENV.DATABASE_ATLAS_URL);
  console.log("database Connected ");

  return database;
}
