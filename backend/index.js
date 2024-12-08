const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./routes/index');
require('dotenv').config();
const connectDB  = require('./config/mongoose');
const session = require("express-session");

connectDB();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
    session({
      secret: process.env.SESSION_SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
    })
  );

// Routes
app.use('/', route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
