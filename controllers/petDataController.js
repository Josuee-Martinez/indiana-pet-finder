const { Router } = require("express");
const router = Router();

const axios = require("axios");

router.get("/", async (req, res) => {
   const token = req.headers.authorization;
   try {
      const config = {
         headers: {
            Authorization: token,
         },
      };

      const response = await axios.get(
         `https://api.petfinder.com/v2/animals?type=${req.body.type}&location=${req.body.location}`,
         config
      );

      res.json(response.data);
   } catch (error) {
      res.json(error);
      console.log(error);
   }
});


module.exports = router;
