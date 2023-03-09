import express, { json, urlencoded } from "express";
import cors from "cors"; // get MongoDB driver connection
import { connectToServer } from "./mongo/conn.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(json());

app.get("/", async (req, res) => {
    res.send("Welcome to the SU CMS API");
  });


  // perform a database connection when the server starts
  connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  });