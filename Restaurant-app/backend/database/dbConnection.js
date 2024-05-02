import mongoose from "mongoose";

const MONGO_URI="mongodb+srv://vikasshuklaaf18:20Vikas!@cluster0.p1jo9re.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const dbConnection = () => {
  mongoose
    .connect(MONGO_URI, {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
