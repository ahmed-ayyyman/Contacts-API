const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config({ path: "./.env" });
const connectDB = require("./config/db");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json())
app.use('/api/contacts', require('./routes/contactRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use(errorHandler)

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err?.message || err);
    process.exit(1);
  });