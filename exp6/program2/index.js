import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// Holds the root API endpoint for all API calls
const API_URL = "https://secrets-api.appbrewery.com";

// Username for basic authentication
const username = "ArjunK";

// Password for basic authentication
const password = "Arjun@596";

// API Key for authentication
// A unique token that identifies and authenticates requests
const api_key = "54754225-33f8-4596-9676-3eb15293fe3d";
const bearer_token = "e084dcad-4898-4b16-b524-3f87beb874a3";



// ========== HOME ROUTE ==========
// Handle GET requests to the root path "/"
// WHAT: When user visits http://localhost:3000, this function runs
// WHY: We display the homepage with a default message
app.get("/", (req, res) => {
  // Render the index.ejs template with default content
  // WHAT: Sends an HTML page to the user with initial content
  // WHY: Shows the user a starting page before they make API requests
  res.render("index.ejs", { content: "API Response." });
});

// ========== NO AUTHENTICATION ROUTE ==========
// Handle GET requests to "/noAuth"
// WHAT: Fetches data from the API without any authentication
// WHY: Testing if the API allows unauthenticated access to public endpoints
app.get("/noAuth", async (req, res) => {
  try {
    // Make an axios GET request to the Secrets API /random endpoint
    // WHAT: Requests a random secret from the API without credentials
    // WHY: Tests what happens when we try to access the API without authentication
    // await: Waits for the API response before continuing
    const result = await axios.get(API_URL + "/random");

    // Render the template with the API response data
    // WHAT: Sends the API data back to the user displayed on the page
    // WHY: Users can see what data the API returned
    // JSON.stringify(): Converts JavaScript object to JSON string for display
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Handle any errors from the API request
    // WHAT: If the API returns an error or request fails, this code runs
    // WHY: Prevents the server from crashing and shows a meaningful error to the user
    res.status(404).send(error.message);
  }
});

// ========== BASIC AUTHENTICATION ROUTE ==========
// Handle GET requests to "/basicAuth"
// WHAT: Fetches data from the API using HTTP Basic Authentication
// WHY: Tests authentication using username and password (Base64 encoded)
app.get("/basicAuth", async (req, res) => {
  try {
    // Make an axios GET request with Basic Authentication
    // WHAT: Sends request with username:password encoded in Base64
    // WHY: Basic Auth requires credentials in the Authorization header
    // auth object: axios automatically encodes username:password in Base64
    const result = await axios.get(API_URL + "/all", {
      auth: {
        username: username,
        password: password,
      },
    });

    // Render the template with the API response
    // WHAT: Displays the authenticated API response
    // WHY: Shows data that was only accessible with valid credentials
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Handle authentication errors
    // WHAT: If credentials are invalid or request fails, handle the error
    // WHY: Prevents server crash and shows user-friendly error message
    res.status(404).send(error.message);
  }
});

// ========== API KEY AUTHENTICATION ROUTE ==========
// Handle GET requests to "/apiKey"
// WHAT: Fetches data using API Key authentication
// WHY: Tests authentication via an API key passed in the headers
app.get("/apiKey", async (req, res) => {
  try {
    // Make an axios GET request with API Key in header
    // WHAT: Sends request with api_key in a custom header (X-API-Key)
    // WHY: API Key authentication requires the key to be in the request header
    const result = await axios.get(API_URL + "/filter", {
      headers: {
        "X-API-Key": api_key,
      },
    });

    // Render the template with the API response
    // WHAT: Displays the data retrieved using API Key auth
    // WHY: Shows what the API returns when properly authenticated with a valid key
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Handle API Key authentication errors
    // WHAT: If API key is invalid or request fails, handle the error
    // WHY: Prevents server crash and shows meaningful error message
    res.status(404).send(error.message);
  }
});

// ========== BEARER TOKEN AUTHENTICATION ROUTE ==========
// Handle GET requests to "/bearerToken"
// WHAT: Fetches data using Bearer Token authentication
// WHY: Tests authentication via Bearer token (commonly used in modern APIs)
app.get("/bearerToken", async (req, res) => {
  try {
    // Make an axios GET request with Bearer Token in Authorization header
    // WHAT: Sends request with Bearer token for authentication
    // WHY: Bearer tokens are standard for OAuth2 and secure API access
    const result = await axios.get(API_URL + "/secrets/42", {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    // Render the template with the API response
    // WHAT: Displays the data retrieved using Bearer Token auth
    // WHY: Shows what protected endpoints return when using valid Bearer token
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    // Handle Bearer Token authentication errors
    // WHAT: If token is invalid or request fails, handle the error
    // WHY: Prevents server crash and provides error feedback to user
    res.status(404).send(error.message);
  }
});

// ========== SERVER START ==========
// Start the server and listen for incoming connections
// WHAT: Activates the server and makes it ready to receive requests on the specified port
// WHY: Without this, the server won't start and users can't connect
app.listen(port, () => {
  // Display confirmation message when server starts
  // WHAT: Logs a message showing the server is running and the port number
  // WHY: Tells the developer the server started successfully; they can now visit http://localhost:3000
  console.log(`Server is running on port ${port}`);
});