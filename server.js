const express = require('express');

const htmlRoute = require("./routes/htmlRoute")
const apiRoute = require("./routes/apiRoute")
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/", htmlRoute);
app.use("/api", apiRoute);



app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
