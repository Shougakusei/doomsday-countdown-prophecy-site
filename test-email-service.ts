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

const testFormData = {
    name: 'Test User',
    email: 'test@example.com',
    riskAssessment: 'High risk'
};

async function testEmail() {
    console.log('Starting test email sending...');
    
    try {
        const result = await transporter.sendMail({
            from: process.env.YANDEX_EMAIL,
            to: 'himitsunoshougakusei@gmail.com',
            subject: 'Test Email - Doomsday Countdown',
            text: `Test email sent:
Name: ${testFormData.name}
Email: ${testFormData.email}
Risk Assessment: ${testFormData.riskAssessment}

Test time: ${new Date().toLocaleString()}`,
            html: `
            <h2>Test Email Sent</h2>
            <p><strong>Name:</strong> ${testFormData.name}</p>
            <p><strong>Email:</strong> ${testFormData.email}</p>
            <p><strong>Risk Assessment:</strong> ${testFormData.riskAssessment}</p>
            <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
            `
        });
        console.log('Test email sent successfully!');
    } catch (error) {
        console.error('Error sending test email:', error);
    }
}

testEmail();
