import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Testing express route');
    console.log('GET request on \'/\'')
})

app.listen(port, () => {
    console.log(`Express server started on port ${port}. Listening...`)
})