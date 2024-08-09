const { transporter } = require('./nodemailer'); 

const contact_form = async (req, res) => {
    const { Name, Email, Phone, Project_details } = req.body;

    if (!Name || !Email) {
        return res.status(400).json({
            error: 'Please fill blanks'
        });
    }

    try {
        await transporter.sendMail({
            from: Email,
            to: process.env.mail_username, 
            subject: `Contact form submission from ${Name}`,
            text: `Name: ${Name}\nEmail: ${Email}\nPhone: ${Phone}\nProject Details: ${Project_details}`
        });

        res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { contact_form };
