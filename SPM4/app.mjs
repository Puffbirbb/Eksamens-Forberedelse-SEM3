import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

app.use(express.static(__dirname + "/filer"));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 20 }, resave: true}));

app.post('/add', function (request, response) {
    const person = request.body;
    let people = request.session.people;
    if (people == undefined) {
        people = [];
    }
    people.push(person);
    request.session.people = people;
    response.status(201).send(`${people.length - 1}`); 
});

app.get('/', function (request, response) {
    let people = request.session.people;
    if (people == undefined) {
        people = [];
    }
    response.render('index', { title: 'Personer', message: 'Personer', people: people });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});