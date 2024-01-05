import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "server",
    })
    .then((c) => console.log(`db connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
