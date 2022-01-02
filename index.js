const axios = require('axios')
const express = require('express')
const app = express()

app.get('/callback', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)

axios.post('https://api.lovense.com/api/lan/getQrCode',
    {
        token: 'Wkqji1S32XfZFAaDkZb5WWlHXNAp1wVg3iRTvnKoYHXou60dcfJibW/i9ADYubD9',  // Lovense developer token
        uid: '4e5hgsfg',  // user id on your website
        uname: 'compowder', // user nickname on your website
        utoken: 'sdfsdf24tq3gaergeag45argaeh'  // This is for your own verification purposes. We suggest you to generate a unique token/secret for each user. This allows you to verify the user and avoid others faking the calls.
    }
).then(r => {
    console.log(r)
})
