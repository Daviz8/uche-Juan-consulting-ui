import express from "express";
import bodyParser from "body-parser";
import { promises as fs } from 'fs';
import path from 'path';
import bodyParser from "body-parser";
import cors from "cors";
import { whitelist } from "./whitelist";



const app = express();
const port = 3030;


export function  runAppConfig() {
  
    const corsOptions = {
        origin: (origin, callback) => {
    
            if (!origin || whitelist.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    };
    
    
    app.use(cors(corsOptions));
      
app.use(express.static("node_modules"));
app.set('view-engine', 'ejs');


app.use("/css" , express.static("dist"));
app.use( express.static("public"));  
app.use(bodyParser.urlencoded({ extended: true }));

  


app.listen( port , ()=> {
  console.log(`App is listening at port ${port}`);
  });
}

