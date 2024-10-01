const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { Product } = require('./models/product.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/product')
    .then(() => {
        console.log("mongodb connected")
    })
    .catch((err) => {
        console.log("failed connecting to mongodb : ", err)
    })

const categories = ['electronics', 'stationary', 'grocery'];

app.get('/', async (req,res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('home', {products})
})

app.get('/add', (req,res) => {
    res.render('add', { categories })
})

app.post('/add',async (req,res) => {
    const data = req.body;
    // console.log(data);
    const product = new Product(data);
    await product.save();
    res.redirect('/')
})

app.listen(8080 , () => {
    console.log('http://localhost:8080/')
})