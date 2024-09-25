const express = require('express');
const app = express();
const path = require('path');

//setting view engin to ejs no need to require ejs
app.set('view engine', 'ejs');
//default directory to look in is /views we can change to directory

//why we need path
//suppose you want to run index.js form outside the templating folder
//then it will give error because it will search for /views in the directory we are running from 
//so we use path to set the relative path
app.set('views', path.join(__dirname, '/views')) //if you want different folder name just replace /views with new dir name
//this line is join /views path directory to the parent directory location

//defining use of static folder for css image js
app.use(express.static(path.join(__dirname, '/public')))
//can even make seperate folder for css/js/image or insider puclic seprate 

app.get('/' , (req,res) => {
    //looks default in /views folder
    res.render('home')
})

app.get('/rand', (req,res) => {
    const number = Math.floor(Math.random() * 1000) + 1;
    res.render('random', {
        number: number
    })
})

app.listen(8080,() => {
    console.log('http://localhost:8080/')
})