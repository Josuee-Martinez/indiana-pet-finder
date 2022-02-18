const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
   res.json({ data: "this is the data for now" });
   res.header("Access-Control-Allow-Origin", "http//localhost:3000");
});

module.exports = router;
