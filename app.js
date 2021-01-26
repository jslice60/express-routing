const express = require('express');
const mongoose = require('mongoose'), Admin = mongoose.mongo.Admin;

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://usafa15:ssaammmmyy74@cluster0.2s1bz.mongodb.net/<dbname>?retryWrites=true&w=majority', 
{ useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', function(){
    new Admin(connection.db).listDatabases(function(err, result) {
        console.log('listDatabases Succeeded');
        var allDB = result.databases;
        console.log('db: ', allDB);
    })
    console.log('MongoDB database connection established!');
})
app.get('/', function(req, res){
    res.json({message: 'Hello'});
});
app.listen(3000, () => {console.log('Server is running')});