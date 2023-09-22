const sendGridAPIKey = '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';
const yourEmail = 'joaolongras2003@gmail.com';

function sendEmail(name, email, subject, message) {
    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sendGridAPIKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            personalizations: [{
                to: [{ email: yourEmail }],
                subject: subject
            }],
            from: { email: email, name: name },
            content: [{ type: 'text/plain', value: message }]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Email sent successfully:', data);
    })
    .catch(error => {
        console.error('Error sending email:', error);
    });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    sendEmail(name, email, subject, message);
});