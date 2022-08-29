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
    res.send("OK");
})

app.post("/tweets", (req,res) => {
    serverTweets.push({
        username: req.body.username,
        tweet: req.body.tweet
    })
    res.send("OK")
})

app.get("/tweets", (req,res) => {
    console.log(allUsers.length);
    const currentUser = allUsers[allUsers.length - 1].username;
    console.log(currentUser);
    const currentAvatar = allUsers.filter((value) => value.username === currentUser)[0].avatar;
    const currentTweets = serverTweets.filter((value) => value.username === currentUser);

    for(let i=0; i<currentTweets.length; i++){
        currentTweets[i].avatar = currentAvatar;
    }

    const currentTweets10 = currentTweets.slice(-10);
    res.send(currentTweets10);


})



app.listen(5000, () => console.log("Server ON"));