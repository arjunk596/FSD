// Express is a lightweight framework that handles HTTP routes
import express from "express";

// When users submit forms with POST requests, body-parser converts the raw request data into JavaScript objects
import bodyParser from "body-parser";

// Axios allows us to make GET/POST requests to the API to fetch data
import axios from "axios";

const app = express();
const port = 3000;

// When users visit the website, they need access to the frontend files (like HTML and CSS)
app.use(express.static("public"));

// Parse URL-encoded request bodies (form data) with extended mode enabled
// Middleware that converts form data into readable JavaScript objects
// When a form is submitted via POST, we need to parse it so we can access req.body.type and req.body.participants
// true allows for nested objects and complex data structures in the form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests to the root path "/"
app.get("/", async (req, res) => {
  try {
    // We need to fetch real activity data from an external source instead of hardcoding it
    // async/await: Waits for the API response before moving to the next line
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    
    // We separate the data to make it easier to work
    const result = response.data;
    // Developers can see what data we received to debug issues if something goes wrong
    console.log(result);
    
    // Sends an HTML page (solution.ejs) back to the user with the activity data
    // The template file creates the visual display that the user sees in their browser
    // { data: result } passes the activity information to be displayed on the page
    res.render("solution.ejs", { data: result });
  } catch (error) {
    // Catch any errors that occur during the API request
    console.error("Failed to make request:", error.message);
    
    // Shows an error page instead of crashing
    res.render("solution.ejs", {
      error: error.message,
    });
  }
});


// POST is used for data submission (as opposed to GET which just retrieves data)
app.post("/", async (req, res) => {
  try {
    // Helps developers see what the user selected to debug issues
    console.log(req.body);
    // Gets the activity category the user chose (e.g., "recreational", "cooking", "sport")
    // We need this to filter the API results for only activities of that type
    const type = req.body.type;
    
    // Gets how many people will participate (e.g., 1, 2, 3, 4+)
    // We need this to filter for activities suitable for that group size
    const participants = req.body.participants;
    
    // Sends a request to the API with the user's chosen filters in the URL
    // The API returns only activities matching the specified type and participant count
    // Template literals (backticks) allow us to insert JavaScript variables into the URL string
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
    );
    
    // Extract the data from the API response (array of activities)
    const result = response.data;
    
    // Prints all the activities received from the API
    console.log(result);
    
    // Render the template with a randomly selected activity from the results
    res.render("solution.ejs", {
      // Math.random() * result.length generates a random index, Math.floor() rounds it down
      // Math.random() generates a decimal between 0 and 1
      // Multiply by result.length to get a number between 0 and the array length
      // Math.floor() rounds down to get a whole number (valid array index)
      // We use this formula to pick a random activity from the results array
      // Example: If array has 5 items (indices 0-4), this picks a random one
      data: result[Math.floor(Math.random() * result.length)],
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});