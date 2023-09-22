let part1 = 'SG._UrcA538Qkyd4Z5-';
let part2 = 'AqztiA.PsXWbJk0C_-6bHlUsolIa04AF9MvQSDJjZzr5MpbuXY';
let apiKey = part1 + part2;
const yourEmail = 'joaolongras2003@gmail.com';
function sendEmail(name, email, subject, message) {
    fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
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