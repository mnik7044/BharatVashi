import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

const main = async () => {
  if (URI) {
    await mongoose.connect(URI);
    console.log("MONGODB CONNECTED");
} else {
    console.log("URI FAILED");
  }
};

main().catch((err) => console.log(err));

export default main;