import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./routers/route.js";

const app = express();

// import connect from db
//** middlewares */

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

const port = 8000;

//** HTTP GET Request  */
app.get("/", (req, res) => {
  res.status(200).json("Home GET Request");
});

//** API routes */

app.use("/api", router);

// ** start server only when a have vaild connection */
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected Port ${port}`);
      });
    } catch (error) {
      console.log("Can't Connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
