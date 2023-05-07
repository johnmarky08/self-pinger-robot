import axios from "axios";
import db from "./mongodb.js";

export default async function () {
  const urls = [];
  (await db.find()).forEach((data) => urls.push(data));
  for (let url of urls) {
    setInterval(function () {
      (async () => {
        try {
          await axios
            .request({
              method: "GET",
              url: url.link,
            })
            .then((res) => {
              return console.up(urls.indexOf(url), url.link);
            });
        } catch {
          return console.down(urls.indexOf(url), url.link);
        }
      })();
    }, 5000);
  }
}
