const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


//connect db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true},
() => console.log('connected to db'));

//Importing routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const cerateitem =  require('./routes/createItem')
const getItems =  require('./routes/getItem')

//route prefix
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/createItem' , cerateitem)
app.use('/getItems' , getItems)

app.use(express.json());



app.listen(5001, () => console.log('Server up and running'));