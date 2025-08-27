// server.js - Backend con Express y Nodemailer
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransporter({
    service: 'gmail', // o tu proveedor de email
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // App password para Gmail
    }
});

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'oviedojonathan2001@gmail.com',
        subject: `Nuevo mensaje de ${name}`,
        html: `
            <h3>Nuevo mensaje de contacto</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

// En el frontend, cambiar handleSubmit:
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        const response = await fetch('http://localhost:5000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setSubmitStatus('error');
        }
    } catch (error) {
        console.error('Error:', error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
    }
};
