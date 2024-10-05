import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from / in aws_test_project")
})

app.get('/todo', (req, res) => {
    res.json({
        message: "hello from todo in aws_test_project"
    })
})

app.listen(3000, () => {
    console.log("Server successfulyy running on port 3000");
})