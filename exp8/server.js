require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Define port early
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect DB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected "))
  .catch(err => console.log(err));

// routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Test route to verify server is working
app.get("/test", (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: "Server is working correctly",
    port: PORT,
    mongoConnected: mongoose.connection.readyState === 1
  });
});


// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
mongoose.connection.once("open", () => {
  console.log("Connected to DB:", mongoose.connection.name);
});
//mongoose - serves as a crucial abstraction layer between the application code and the database. 
//Mongoose enforces a structured, schema-based approach