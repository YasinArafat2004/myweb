const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// === Nodemailer Setup with New App Password ===
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'yasin.arafat.csecu@gmail.com',          // Replace with your Gmail address
    pass: 'onmt abor sdjq xtbi',    // Replace with your new 16-character App Password
  },
});

// === POST Endpoint for Payment Form ===
app.post('/submit-payment', (req, res) => {
  const { name, phone, amount, trxid, notes } = req.body;

  const mailOptions = {
    from: 'yasin.arafat.csecu@gmail.com',
    to: 'yasin.arafat.csecu@gmail.com',  // You can add any email where you'd like to receive the notifications
    subject: `New bKash Payment - ${name}`,
    html: `
      <h3>bKash Payment Info</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Amount:</strong> ৳${amount}</p>
      <p><strong>Transaction ID:</strong> ${trxid}</p>
      <p><strong>Notes:</strong> ${notes || 'N/A'}</p>
    `,
  };

  // Send the email with the form data
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('❌ Error:', error);
      return res.json({ success: false });
    } else {
      console.log('✅ Email sent:', info.response);
      return res.json({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
