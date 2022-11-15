const express = require("express");

const router = express.Router();

const obtainASCII = (a) => { 
  return a.charCodeAt(0);
}


router.get("/views/CharToASCII.ejs", (req, res) => {
  res.render("../views/CharToASCII.ejs");
});

router.post("/views/", (req, res) => {
  
  const CharacterValue = req.body.CharValue
  const ascii = obtainASCII(CharacterValue)

  res.render("../views/CharToASCII.ejs", { previewValue: CharacterValue,  ascii});
});

module.exports = router;
