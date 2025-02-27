import { DbPassword } from "./core.secrets";
import pg from "pg";

// Create a new connection to the database

function connectToDB() {
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: DbPassword ,
    port: 5432,
  
  });

  db.connect(); 
}
  


  export default connectToDB;