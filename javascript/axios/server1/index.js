// Server - 1

import express from "express"
const PORT = 3000;
const app = express();

// users dummy data 
const data = [
    {
        "name": "shrut",
        "age": 12,
        "subjects": ["SE", "DBMS", "CN", "ICT"],
        "company": ["kevit"],
        "tech": ["javascript", "c", "c++"]
    },
    {
        "name": "alex",
        "age": 25,
        "subjects": ["AI", "ML", "NLP"],
        "company": ["techcorp"],
        "tech": ["python", "java", "scala"]
    },
    {
        "name": "lisa",
        "age": 30,
        "subjects": ["Data Science", "Statistics"],
        "company": ["dataminds"],
        "tech": ["R", "SQL", "Tableau"]
    },
    {
        "name": "john",
        "age": 22,
        "subjects": ["Web Development", "UI/UX"],
        "company": ["webworks"],
        "tech": ["HTML", "CSS", "JavaScript"]
    },
    {
        "name": "emma",
        "age": 28,
        "subjects": ["Digital Marketing", "SEO"],
        "company": ["digitalspace"],
        "tech": ["Google Analytics", "Social Media"]
    }
]

app.get('/data',  (req, res) => {
    return res.json(data)
})

app.post('/data', (req, res) => {
    data.push(req.body);
    res.status(200);
})


app.listen(PORT, () => {
    console.log(`[server 1] : Server 1 is listining on http://localhost:${PORT}`);
})