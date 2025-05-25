const jwt = require("jsonwebtoken");

module.exports = function auth(req, res, next) {
  const header = req.header("Authorization");
  if (!header)
    return res.status(401).json({ msg: "No token, authorization denied" });

  const token = header.split(" ")[1];
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
