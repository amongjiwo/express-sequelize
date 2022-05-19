const express = require("express");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});