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
app.use(methodeOverride('_method'));

//Mongoose Connection
const mongoURL = process.env.MONGO_URL

mongoose.connect(mongoURL, {useNewUrlParser: true,
useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log("Connected to MongoDB");
})

//Controllers
app.get('/', (req, res) => {
  res.render('Index.jsx')
});

const sleepWare = require('./controllers/sleepWare.js');
app.use('/sleepware', sleepWare);

const skinCare = require('./controllers/skinCare.js');
app.use('/skincare', skinCare);

//Listener
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
});