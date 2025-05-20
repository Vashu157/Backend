const express = require('express');
require('dotenv').config();
const app = express();

const gitdata = {
    "login": "Vashu157",
    "id": 143780347,
    "node_id": "U_kgDOCJHp-w",
    "avatar_url": "https://avatars.githubusercontent.com/u/143780347?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Vashu157",
    "html_url": "https://github.com/Vashu157",
    "followers_url": "https://api.github.com/users/Vashu157/followers",
    "following_url": "https://api.github.com/users/Vashu157/following{/other_user}",
    "gists_url": "https://api.github.com/users/Vashu157/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Vashu157/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Vashu157/subscriptions",
    "organizations_url": "https://api.github.com/users/Vashu157/orgs",
    "repos_url": "https://api.github.com/users/Vashu157/repos",
    "events_url": "https://api.github.com/users/Vashu157/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Vashu157/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 7,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2023-09-01T05:40:41Z",
    "updated_at": "2025-05-20T06:57:22Z"
  }
app.get('/',(req,res) => {
    res.json('Helow world')
})
app.get('/login',(req,res)=>{
    res.send("<h1>login page</h1>");
})
app.get('/github',(req,res)=>{
    res.json(gitdata)
}) 
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`)
})