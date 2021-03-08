// // The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// const functions = require('firebase-functions');

// // The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
// admin.initializeApp();

// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)


// exports.EmailTriggered = admin.functions.firestore
//     .document('lead_capture/{wildcard}')
//     .onCreate((event) => {

//         const newValue = event.data();

//         const msg = {
           
//             to: "brunomartinsux@gmail.com",
//             subject: 'Deu Certo!',
//             templateId: 'd-03cc94db5bb74bf1b6ffad6013a4bf04',
//             substitutionsWrapper: ['{{', '}}']
            
//         }
//     return sgMail.send(msg)
//  })
