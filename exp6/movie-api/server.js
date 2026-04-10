const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory movie storage
let movies = [
    {
        id: 1,
        title: "Doremon",
        genre: "Children-Sci-Fi",
        rating: 4.8,
        recommendation: "ABSOLUTELY"
    },
    {
        id: 2,
        title: "Shinchan",
        genre: "Children-Comedy",
        rating: 4.9,
        recommendation: "ABSOLUTELY"
    },
    {
        id: 3,
        title: "Chota Bheem",
        genre: "Fictional Timpess",
        rating: 2.5,
        recommendation: "Hell Nah"
    }
];

let nextId = 4;

// Helper function to filter movies by rating (optional)
const filterByRating = (moviesArray, ratingQuery) => {
    if (!ratingQuery) return moviesArray;
    const minRating = parseFloat(ratingQuery);
    if (isNaN(minRating)) return moviesArray;
    return moviesArray.filter(movie => movie.rating >= minRating);
};

// ------------------- ROUTES -------------------

// GET /movies - Get all movies (with optional rating filter)
app.get('/movies', (req, res) => {
    const { rating } = req.query;
    let result = [...movies];
    result = filterByRating(result, rating);
    res.json(result);
});

// POST /movies - Add a new movie
app.post('/movies', (req, res) => {
    const { title, genre, rating, recommendation } = req.body;

    // Basic validation
    if (!title || !genre || rating === undefined || !recommendation) {
        return res.status(400).json({ error: 'Missing required fields: title, genre, rating, recommendation' });
    }

    const newMovie = {
        id: nextId++,
        title,
        genre,
        rating: parseFloat(rating),
        recommendation
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// PATCH /movies/:id - Partially update a movie
app.patch('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updates = req.body;
    const movieIndex = movies.findIndex(m => m.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    // Update only provided fields
    const updatedMovie = { ...movies[movieIndex], ...updates };
    // Ensure rating is a number if provided
    if (updates.rating !== undefined) {
        updatedMovie.rating = parseFloat(updates.rating);
    }
    movies[movieIndex] = updatedMovie;
    res.json(updatedMovie);
});

// DELETE /movies/:id - Remove a movie
app.delete('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movieIndex = movies.findIndex(m => m.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({ error: 'Movie not found' });
    }

    movies.splice(movieIndex, 1);
    res.status(204).send(); // No content
});

// Start server
app.listen(PORT, () => {
    console.log(`Movie API running at http://localhost:${PORT}`);
});