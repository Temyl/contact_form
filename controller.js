const nodemailer = require('nodemailer');

const contact_form = async (req, res) => {
    const { Name, Email, Phone, Project, details} = req.body;
    if (!Name || !Email ) {
        return res.status(400).json({
            error: 'please fill blank'
        });
    }
};