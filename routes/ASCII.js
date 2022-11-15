const express = require("express");

const router = express.Router();

const obtainASCII = (a) => { 
  return a.charCodeAt(0);
}

const obtainCharacter = (a) => { 
  return String.fromCharCode(a);
}

router.get("/abc", (req, res) => {
  res.render("../views/CharToASCII.ejs", {previewValue : "", ascii : "", title: "Character to ASCII"});
});

router.post("/CharToASCII/Result", (req, res) => {
  
  const CharacterValue = req.body.CharValue
  const ascii = obtainASCII(CharacterValue)

  res.render("../views/CharToASCII.ejs", { previewValue: CharacterValue,  ascii, title: "Character to ASCII"});
});

router.get("/ASCIIChar", (req, res) => { 
  res.render("../views/ASCIIChar.ejs", {title: "ASCII to Character" , previewValue: "" , character: ""})
})
router.post("/ASCIIChar/Result", (req, res) => { 
  const AsciiValue = req.body.AsciiValue
  const CharacterValue = obtainCharacter(AsciiValue);
  res.render("../views/ASCIIChar.ejs", {title: "ASCII to Character" , previewValue: AsciiValue , character: CharacterValue })
})

module.exports = router;
