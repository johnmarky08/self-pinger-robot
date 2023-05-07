import ping from "../ports/ping.js";
import remove from "../ports/remove.js";
import { up, err, load, log } from "../lib/log.js";
import main from "./index.js";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import boxen from "boxen";
const port = process.env.PORT || process.env.port || 8080,
  app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.set("json spaces", 2);
dotenv.config();

console.up = up;
console.down = err;
console.load = load;
console.logg = log;

app.get("/", function (req, res) {
  res.jsonp({
    author: "John Marky Natividad",
    code: 200,
    message: "self-pinger-robot!",
    use: "/ping or /remove",
  });
});
app.get("/ping", ping);
app.get("/remove", remove);

app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, function (err) {
      if (err) {
        console.error("FAILURE TO LAUNCH SERVER!");
        return;
      }
      console.load(
        `LISTENING ON PORT ${port}\n» ==== SELF PINGER ROBOT ==== «`
      );
      console.logg(
        boxen(
          "John Marky Natividad\nhttps://www.facebook.com/johnmarky.natividad",
          {
            padding: 1,
            margin: 1,
            borderStyle: "double",
            title: "SOURCE CODE",
            titleAlignment: "center",
            align: "center",
          }
        )
      );
    });
  })
  .catch((err) => console.log(`${err} - Not Connected`));

console.load("SELF PINGER ROBOT");
console.load("SUCCESSFULLY CONNECTED!!");

main();
