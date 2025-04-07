import { config, env } from "process";
import { configDotenv } from "dotenv";
configDotenv();

export const DbPassword = process.env.DbPassword;  