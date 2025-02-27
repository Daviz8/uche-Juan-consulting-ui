import { config, env } from "process";
import { configDotenv } from "dotenv";
configDotenv();

export const Password = process.env.DbPassword;  