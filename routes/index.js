var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", {});
});

router.get("/contexto", (req, res, next) => {
  res.render("contexto", {});
});

router.get("/diferenca", (req, res, next) => {
  res.render("diferenca", {});
});

router.get("/religiao",  (req, res, next) => {
  res.render("religiao", {});
});

router.get("/resultado",  (req, res, next) => {
  res.render("resultado", {});
});

router.get("/hipoteses", (req, res, next) => {
  res.render("utopia", {});
});

router.get("/ferrou",  (req, res, next) => {
  res.render("fudeu", {});
});



module.exports = router;
