import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Create a transporter using nodemailer for Yandex
const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/api/register', async (req, res) => {
  try {
    console.log('Received registration request:', req.body);
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
      console.log('Invalid email format');
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Registration Confirmation',
      text: 'Thank you for registering!'
    };

    console.log('Sending email to:', email);
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      response: error.response
    });
    res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
