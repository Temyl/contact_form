const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});