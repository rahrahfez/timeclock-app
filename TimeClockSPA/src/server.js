const express = require('express');

const app = express();

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [
            { name: 'lily' }, 
            { name: 'lucy' }]
    });
});

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name'];
    res.send({name: requestedCatName});
});