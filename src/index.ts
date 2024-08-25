import connectDB from "./databases/mongo.config";
import app from "./app";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Mongodb connection failed`, err);
  });
