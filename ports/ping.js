import _data from "../src/mongodb.js";

export default async function (req, res, next) {
  const link = req.query.link;
  function isUrlValid(_link) {
    var res = _link.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) return !1;
    else return !0;
  }
  if (!link) {
    return res.jsonp({
      code: 411,
      message: "No Parameter For Link!",
      author: "John Marky Natividad",
    });
  } else if (!isUrlValid(link)) {
    return res.jsonp({
      code: 411,
      message: "Invalid Link!",
      author: "John Marky Natividad",
    });
  } else {
    try {
      var db_find = await _data.findOne({ link }).exec();
      if (!db_find) {
        await _data.create({
          link,
        });
        res.status(201).jsonp({
          code: 201,
          message: "Your Website Is Successfully Added!",
          author: "John Marky Natividad",
        });
        return console.load(
          "New Ping Added: " + link + "\nRestart To Start Ping!"
        );
      } else {
        return res.status(400).jsonp({
          code: 400,
          message: "Your Website Is Already Pinged!",
          author: "John Marky Natividad",
        });
      }
    } catch (err) {
      return res.status(400).jsonp({ error: err });
    }
  }
}
