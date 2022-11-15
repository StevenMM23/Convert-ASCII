const express = require("express");

const router = express.Router();

const obtainASCII = (a) => { 
  return a.charCodeAt(0);
}


router.get("/abc", (req, res) => {
  res.render("../views/CharToASCII.ejs", {previewValue : "", ascii : "", title: "Character to ASCII"});
});

router.post("/CharToASCII/Result", (req, res) => {
  
  const CharacterValue = req.body.CharValue
  const ascii = obtainASCII(CharacterValue)

  res.render("../views/CharToASCII.ejs", { previewValue: CharacterValue,  ascii, title: "Character to ASCII"});
});

module.exports = router;
