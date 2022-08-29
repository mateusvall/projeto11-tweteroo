import express from 'express'
import cors from 'cors'

const app = express ();
app.use(cors())
app.use(express.json());

const allUsers = [];
const serverTweets = []

app.post("/sign-up", (req, res) => {
    allUsers.push({
        username: req.body.username,
        avatar: req.body.avatar
    })
    res.send(`${allUsers}`);
})

app.post("/tweets", (req,res) => {
    serverTweets.push({
        username: req.body.username,
        tweet: req.body.tweet
    })
    res.send(`${serverTweets}`)
})

app.get("/tweets", (req,res) => {

})



app.listen(5000);