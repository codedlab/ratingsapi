const express = require("express");
var mongoose = require("mongoose");
require("dotenv").config();

const postRoutes = require("./routes/post");
const rateRoutes = require("./routes/rate");
const app = express();

var mongoDB = process.env.MONGODB;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});

app.use(express.json());
app.use("/api", postRoutes);
app.use("/api", rateRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`RatingsApi running on http://localhost:${port}`);
});
