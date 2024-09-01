var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {});
});

router.get("/contexto", function (req, res, next) {
  res.render("contexto", {});
});

router.get("/diferenca", function (req, res, next) {
  res.render("diferenca", {});
});

router.get("/religiao", function (req, res, next) {
  res.render("religiao", {});
});

router.get("/resultado", function (req, res, next) {
  res.render("resultado", {});
});

module.exports = router;
