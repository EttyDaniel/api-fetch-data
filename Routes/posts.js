const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.send("My Server is running! ");
  });
return router;
};
