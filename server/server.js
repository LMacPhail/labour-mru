const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

// Configuration for the proxy
const API_SERVICE_URL = "https://api.futurelabourmps.com/A3:AT70";

app.use(
  "/api",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/api`]: "",
    },
  })
);

const PORT = 4000; // You can choose any port
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});
