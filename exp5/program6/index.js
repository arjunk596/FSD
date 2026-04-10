import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => { //retrieve data or request data from the server
    res.send("<h1>Home Page</h1>");
});
app.post("/register", (req, res) => { //create data or give data to the server
    //Do something with the data
    res.sendStatus(201);
});
app.put("/user/joshua", (req, res) => { //update/replace data 
    res.sendStatus(200);
});
app.patch("/user/joshua", (req, res) => { //update a part of data 
    res.sendStatus(200);
});
app.delete("/user/joshua", (req, res) => { //remove data
    //Deleting
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`); //start server
});