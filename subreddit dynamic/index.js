const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const redditJson = require('./data.json')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/r/:subreddit', (req,res) => {
    let subreddit = req.params.subreddit
    let data = redditJson[subreddit]
    // console.log(data)
    if(data){
        res.render('reddit', {data})
    }else{
        res.render('notfound', {subreddit})
    }
    //for {data:data} it's an object we're passing in and we can name
//  but when we reference it in ejs we have to call the key to the left
})












app.listen((port), function(){
    console.log(`listening on port ${port}`)
})
