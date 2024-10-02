const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const User = require('./models/user');
const mongoose = require('mongoose');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended:true }));
app.use(session({ secret : "secretkey"}));

mongoose.connect('mongodb://localhost:27017/loginDatabse')
    .then(() => {
        console.log("connected to databse")
    })
    .catch((e)=> {
        console.log("error connecting to database", e)
    })

app.get('/', (req,res) => {
    res.render('home', {
        username : req.session.username,
        isLogin : req.session.isLogin
    })
})

app.get('/login', (req,res) => {
    res.render('login')
})

app.get('/signup', (req,res) => {
    res.render('signup')
})

app.post('/signup',async (req,res) => {
    try {
        const data = req.body;
        data.password = await bcrypt.hash(data.password,12);
        const user = new User(data);
        await user.save(); 
        req.session.user_id = user._id;
        req.session.username = user.name;
        req.session.isLogin = true;
        res.redirect('/')
    } catch(e) {
        console.log("Error in signup : ",e)
    }
})

app.post('/login',async (req,res) => {
    try {
        const data = req.body;
        const check = await User.findOne({ email: data.email});
        if(check){
            const flag = await bcrypt.compare(data.password, check.password);
            if(flag){
                req.session.user_id = check._id;
                req.session.username = check.name;
                req.session.isLogin = true;
                res.redirect('/')
            }
            else{
                res.send('try again')
            }
        }
    } catch(e) {
        console.log("Error in login : ",e)
    }
})

app.post('/logout', (req,res) => {
    req.session.destroy()
    res.redirect('/')
})

app.listen(8080, () => {
    console.log("http://localhost:8080/")
})