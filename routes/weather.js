const url = require("url");
const express = require("express");
const router = express.Router();
const needle = require("needle");
const apicache = require("apicache");

// env variables
const WEATHERAPI_BASE_URL = process.env.WEATHERAPI_BASE_URL;
const WEATHERAPI_KEY_NAME = process.env.WEATHERAPI_KEY_NAME;
const WEATHERAPI_KEY_VALUE = process.env.WEATHERAPI_KEY_VALUE;

// initialize cache
let cache = apicache.middleware;

router.get("/", cache("60 minutes"), async (req, res) => {
  try {
    const params = new URLSearchParams({
      [WEATHERAPI_KEY_NAME]: WEATHERAPI_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    const apiRes = await needle("get", `${WEATHERAPI_BASE_URL}?${params}`);
    const data = apiRes.body;

    // log the request to the public API
    if (process.env.NODE_ENV !== "production") {
      console.log(`REQUEST: ${WEATHERAPI_BASE_URL}?${params}`);
    }

    res.status(200).setHeader("Access-Control-Allow-Origin", "*").json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
