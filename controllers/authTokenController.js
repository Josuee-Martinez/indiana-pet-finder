const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
   try {
      const response = await axios.post(
         "https://api.petfinder.com/v2/oauth2/token",
         `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      );

      res.json(response.data);
   } catch (error) {
      res.json(error);
      console.error(error, "h");
   }
});

module.exports = router;
