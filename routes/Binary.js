const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/DecimalToBinary", (req, res) => {
  res.render("../views/DecimalBinary.ejs", { title: "Decimal To Binary" , previewValue : " ", binary : " "});
});

router.post("/DecimalToBinary/Result", async (req, res, next) => {
  const decimalValue = req.body.DecimalValue;
  const url = `https://networkcalc.com/api/binary/${decimalValue.trim()}?from=10&to=2`
  try {
    const BinaryValue = await axios.get(url);
    const {data : {converted}} = BinaryValue;
    
    res.render("../views/DecimalBinary.ejs", ({title: "Decimal to Binary", previewValue: decimalValue, binary: converted}))
      
  } 
  catch (error) {
    res.send(error)
  }
});

module.exports = router;
