import express from "express";
import welcomePage from "./views/index.js";
import homePage from "./views/homePage.js";
import paginaParteneri from "./views/paginaParteneri.js";
import ghid from "./views/ghid.js";

const app = express();
app.use(express.urlencoded({extended: false})); // parse URL-encoded request bodies
app.use(express.static("public")); // se uita in public cand cauta imagini, css, html, js, etc.

app.get('/', (req, res) => { // index page

    res.send(welcomePage());
});

app.get('/homePage', (req, res) => {

    res.send(homePage());
});

app.get('/parteneri', (req, res) => {

    res.send(paginaParteneri());
});

app.get('/ghid', (req, res) => {

    res.send(ghid());
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});