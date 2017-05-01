var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

 
router.get('/thelist', function(req, res){
 
  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;
 
  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/sampsite';
 
  // Connect to the server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the Server', err);
  } else {
    // We are connected
    console.log('Connection established to', url);
 
    // Get the documents collection
    var collection = db.collection('table');
 
    // Find all students
    collection.find({}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        console.log(result);
        /*res.render('studentlist',{
 
          // Pass the returned database documents to Jade
          "studentlist" : result
        });*/
        res.send(result);
      } else {
        res.send('No documents found');
      }
      //Close connection
      db.close();
    });
  }
  });
});

router.get('/tweet', function(req, res){
 
  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;
 
  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/sampsite';
 
  // Connect to the server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the Server', err);
  } else {
    // We are connected
    console.log('Connection established to', url);
 
    // Get the documents collection
    var collection = db.collection('tweet');
 
    // Find all students
    collection.find({}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        console.log(result);
        /*res.render('studentlist',{
 
          // Pass the returned database documents to Jade
          "studentlist" : result
        });*/
        res.send(result);
      } else {
        res.send('No documents found');
      }
      //Close connection
      db.close();
    });
  }
  });
});

router.get('/lineChart', function(req, res){
 
  // Get a Mongo client to work with the Mongo server
  var MongoClient = mongodb.MongoClient;
 
  // Define where the MongoDB server is
  var url = 'mongodb://localhost:27017/sampsite';
 
  // Connect to the server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the Server', err);
  } else {
    // We are connected
    console.log('Connection established to', url);
 
    // Get the documents collection
    var collection = db.collection('lineChart');
 
    // Find all students
    collection.find({}).toArray(function (err, result) {
      if (err) {
        res.send(err);
      } else if (result.length) {
        console.log(result);
        /*res.render('studentlist',{
 
          // Pass the returned database documents to Jade
          "studentlist" : result
        });*/
        res.send(result);
      } else {
        res.send('No documents found');
      }
      //Close connection
      db.close();
    });
  }
  });
});
 

 
module.exports = router;



/*

db.students.insert([{"student":"Dale Cooper", "street": "123" , "city": "yaquimechi", "state": "WA", "sex" : "M", "gpa": 3.5 }])

*/