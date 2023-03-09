import express, { json, urlencoded } from "express";
import cors from "cors"; // get MongoDB driver connection
import { connectToServer } from "./mongo/conn.js";

import userRoutes from "./routes/userRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(json());
app.use(urlencoded());
app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);


app.get("/", async (req, res) => {
  res.send("Welcome to the  API");
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
