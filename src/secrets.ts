import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const MONGODB_URI = process.env.MONGODB_URI;
