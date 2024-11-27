const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Request method: ${req.method}, URL: ${req.url}`);
    next(); 
});


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
