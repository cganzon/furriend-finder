const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/furriendfinderDB', { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));