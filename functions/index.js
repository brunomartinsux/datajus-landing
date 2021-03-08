const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)




exports.EmailTriggered = functions.firestore
    .document('lead_capture/{LeadId}')
    .onCreate( event => {

        const lead = event.data()

        const msg = {
            to: 'brunomartinsux@gmail.com',
            from: 'brunomartinsux@gmail.com', 
            subject: 'Novo Lead',
            templateId:"d-03cc94db5bb74bf1b6ffad6013a4bf04",
            subs:{
                "-name-":lead.name,
                "-email-":lead.email
            }
        }
        return sgMail.send(msg)
    .then(() => console.log('Email Enviado!'))
    .catch(err => console.log(err))

 })
