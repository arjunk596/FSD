// index.js - Password Protected Secrets
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
let userIsAuthorised = false;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// 🔴 Password Check Middleware
function passwordCheck(req, res, next) {
    const password = req.body.password;
    console.log('🔑 Checking password:', password);
    
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
        console.log('✅ Password correct!');
    } else {
        userIsAuthorised = false;
        console.log('❌ Password incorrect!');
    }
    next();
}

// Apply password check only to POST /check route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/check', passwordCheck, (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + '/public/secret.html');
    } else {
        res.sendFile(__dirname + '/public/index01.html');
    }
});

app.listen(port, () => {
    console.log(`🚀 Server at http://localhost:${port}`);
    console.log('🔐 Password: ILoveProgramming');
});