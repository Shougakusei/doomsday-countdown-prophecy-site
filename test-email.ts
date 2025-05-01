import { sendRegistrationEmail } from './src/services/emailService.js';

const testFormData = {
    name: 'Test User',
    email: 'test@example.com',
    riskAssessment: 'High risk'
};

async function testEmail() {
    try {
        await sendRegistrationEmail(testFormData);
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending test email:', error);
    }
}

testEmail();
