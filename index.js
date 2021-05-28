const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set Static Dir.
app.use(express.static('public'));

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/'));

app.listen(port, () => console.log(`Listening on port ${port}.`))