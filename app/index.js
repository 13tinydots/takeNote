// top level JS file
// bringing express and apiRouter together

import express from "express";
import apiRouter from "./routes/api.js";
const PORT = process.env.PORT || 3001;
const app = express();

// telling express to use the public folder
app.use(express.static("app/public"));
app.use(express.json());

// designating the apiRouter to the router
app.use("/api", apiRouter);

// confirming the server is up and running
app.listen(PORT, () => {
  console.info(`Listening on PORT: ${PORT}`);
});
