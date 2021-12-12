//importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
//defining app and port the app will use
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
//connecting to mongoose server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// directing app to use routes
app.use(routes);
// directing app to listen on port 3000
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
