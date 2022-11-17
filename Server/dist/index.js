"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const zomatoPI = (0, _express.default)();
zomatoPI.use(_express.default.json());
zomatoPI.get("/", (req, res) => {
  res.json({
    message: "Server is running"
  });
});
const PORT = 4000;
zomatoPI.listen(PORT, () => {
  console.log("Server is running");
});