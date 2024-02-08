import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./App/route/router"; 

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:5173"]}));

app.use(router);



const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });