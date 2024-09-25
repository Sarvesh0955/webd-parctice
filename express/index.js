const express = require('express');
const app = express();

//default for any request form client
// app.use((req,res) => {
//     console.log("new request");
//     res.send('<h1>h</h1>');
// })

app.get('/' , (req,res) => {
    res.send("home page")
})

//at end for all the unknown paths
// app.get('*', (req,res) => {
//     res.send("not know path")
// })

//customisable routes
app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params;
    // console.log(req.params);
    res.send(`<h1>${subreddit}</h1>`)
})

//query string
app.get('/search', (req,res) => {
    const {q} = req.query;
    if(q)
    res.send(`searching ${q}`)
    else
    res.send("nothing to search")
})

app.listen(3000, () => {
    console.log("Listening on part 3000")
})