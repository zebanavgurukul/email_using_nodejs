const nodemailer = require('nodemailer');
// declare vars
let fromMail = "zeba18@navgurukul.org";
let toMail = "rashmi18@navgurukul.org";


let subject  = "holiday";
let text = "I wrote this email because I want leave in this month And I didn't go home from 1 year 3 months so my mom is calling me .And whenever I am calling her. she is always asking me when you will come home we are missing too much. That’s why I want holiday for someday so I will spend some time with my family. they will feel good and sometime I am not feeling good in ng." 


// auth
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:"zeba18@navgurukul.org",
        pass:""
    }
});

// email options
let mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: text
};

// send email
transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
        console.log(error);
    }
    console.log(response,"send")
});