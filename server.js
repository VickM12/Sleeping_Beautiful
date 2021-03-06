require ('dotenv').config()

//dependencies//
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require ('method-override');

//Port Access//
const PORT = process.env.PORT || 3000;

//Middleware//
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

//Mongoose Connection
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {useNewUrlParser: true,
useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log("Connected to MongoDB");
})

//Controllers
const sleepwearController = require('./controllers/sleepwear.js');
app.use('/sleepwear', sleepwearController);

const skincareController = require('./controllers/skincare.js');
app.use('/skincare', skincareController);

app.get('/', (req, res) => {
  res.render('Index.jsx')
});
//Listener
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
});