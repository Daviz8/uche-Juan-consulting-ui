import { runAppConfig } from "./core/core.config";
import { connectDB } from "./core/db";

connectDB();
runAppConfig();