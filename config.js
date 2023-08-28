import crypto from "crypto";

export default {
  JWT_SECRET: "J9l4MpIo/EBufkFIV5bjqw4lbFOXc4S6AJCyjTU/M8c=",
  EMAIL: "yoshiko.batz@ethereal.email",
  EMAILPASSWORD: "VV69Pxzjb6FdM1K6dN",
  DATABASE_ATLAS_URL:
    "mongodb+srv://ZENCLASS:TASK@cluster0.ebmmv10.mongodb.net/",
};

const randomBytes = crypto.randomBytes(32); // Generates 32 random bytes
const secretKey = randomBytes.toString("base64");
