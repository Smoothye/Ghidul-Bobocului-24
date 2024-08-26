import express from "express"

const app = express();
app.use(express.urlencoded({extended: false})); // parse URL-encoded request bodies
app.use(express.static("public")); // se uita in public cand cauta imagini, css, html, js, etc.

app.get('/', (req, res) => {

    res.send();
});

app.listen(3000, () => {
    console.log("App listening on port 3000");
});