import mongoose from "mongoose";
import { DatabaseName } from "../utils/constants";
import { MONGODB_URI } from "../secrets";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${MONGODB_URI}/${DatabaseName}`
        );
        console.log(
            `Database connected !! Host:${connectionInstance.connection.host} : ${connectionInstance.connection.port}`
        );
    } catch (error) {
        console.log("Database connection FAILED", error);
        process.exit(1);
    }
};

export default connectDB;
