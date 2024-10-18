const express = require('express');
const app = express();
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended:true }));
app.use(session({ secret : "secretkey"}));
app.use(flash());

app.use((req,res,next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.get('/', (req,res) => {
    res.render('home');
})

app.post('/submit', (req,res) => {
    console.log(req.body);
    req.flash('success','successfully submitted data');
    res.redirect('/');
})

app.listen(8080, (req,res) => {
    console.log("server running on localhost:8080/");
})