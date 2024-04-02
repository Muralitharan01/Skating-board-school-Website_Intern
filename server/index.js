const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (make sure MongoDB is running)
mongoose.connect('mongodb://localhost:27017/local', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const studentRoutes = require("./routes/StudentRoutes");
app.use("/api/student", studentRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
