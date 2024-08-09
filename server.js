const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const { contact_form } = require('./controller');
const router = express.Router();



const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

router.post('/contact_form', contact_form);
app.use(router);



// app.post('/contact_form', contact_form);



app.listen(port, () => {
    console.log(`server running on port ${port}`);
});