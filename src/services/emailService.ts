import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true,
    auth: {
        user: process.env.YANDEX_EMAIL,
        pass: process.env.YANDEX_APP_PASSWORD
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000, // 10 seconds
    socketTimeout: 10000, // 10 seconds
    timeout: 10000 // 10 seconds
});

export const sendRegistrationEmail = async (formData: {
    name: string;
    email: string;
    riskAssessment: string;
}) => {
    console.log('Starting email sending process...');
    console.log('Form data:', formData);

    try {
        const result = await transporter.sendMail({
            from: process.env.YANDEX_EMAIL,
            to: 'himitsunoshougakusei@gmail.com',
            subject: 'New Registration - Doomsday Countdown',
            text: `New registration received:
Name: ${formData.name}
Email: ${formData.email}
Risk Assessment: ${formData.riskAssessment}

Registration time: ${new Date().toLocaleString()}`,
            html: `
            <h2>New Registration Received</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Risk Assessment:</strong> ${formData.riskAssessment}</p>
            <p><strong>Registration Time:</strong> ${new Date().toLocaleString()}</p>
            `
        });
        
        console.log('Email sent successfully!');
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    } finally {
        console.log('Email sending process completed');
    }
    try {
        // Create a promise that will reject after 10 seconds
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error('Email sending timed out after 10 seconds'));
            }, 10000);
        });

        // Create the email sending promise
        const sendPromise = transporter.sendMail({
            from: process.env.YANDEX_EMAIL,
            to: 'himitsunoshougakusei@gmail.com', // Send to your Yandex email
            subject: 'New Registration - Doomsday Countdown',
            text: `New registration received:
Name: ${formData.name}
Email: ${formData.email}
Risk Assessment: ${formData.riskAssessment}

Registration time: ${new Date().toLocaleString()}`,
            html: `
            <h2>New Registration Received</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Risk Assessment:</strong> ${formData.riskAssessment}</p>
            <p><strong>Registration Time:</strong> ${new Date().toLocaleString()}</p>
            `
        });
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};
