const nodemailer = require('nodemailer');
require('dotenv').config();

export default function mailing(req, res) {

        async function main() {
            // Create a SMTP transporter object
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "brunomartinsux@gmail.com",
                    pass: "Baiana202"
                }
            });
            // Step 2
            let mailOptions = {
                from: 'brunomartinsux@gmail.com', 
                to: 'lameranha@gmail.com', 
                subject: 'Novo Lead - Landing Page',
                text: 'Novo lead captado'
            };

            transporter.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return console.log('Error occurs');
                }
                return console.log('Email sent!!!');
            });
        
        }

        main().catch(err => {
            console.error(err.message);
            process.exit(1);
        });

    return res.status(201).json({'status':'enviado'})
  }