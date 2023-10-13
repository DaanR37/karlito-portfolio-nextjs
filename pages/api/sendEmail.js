// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// require('dotenv').config();
// import { createTransport } from "nodemailer";

// const nodemailer = require('nodemailer');

// export default async function handler(req, res) {

//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     const transporter = createTransport({
//       host: 'smtp.mail.me.com',
//       port: 465, // You can use port 465 for SSL/TLS if preferred
//       secure: true, // Set to true for port 465
//       auth: {
//         user: 'info@karlein.nl', // Your Apple Mail email address
//         pass: process.env.MAIL_PASSWORD, // Your email password or app-specific password
//       },
//     });

//     const mailOptions = {
//       from: 'info@karlein.nl', // Your Apple Mail email address
//       to: 'info@karlein.nl', // Replace with the recipient's email address
//       subject: 'New form submission',
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'An error occurred while sending the email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
