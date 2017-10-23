var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thelist', function(req,res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/showmedb';
	MongoClient.connect(url, function(err,db){
		if(err){
			console.log("Trouble connection",err);
		} else {
			console.log("We are connected");
			var collection = db.collection('students');

			collection.find({}).toArray(function(err, result){
				if(err){
					console.log("Couldnt get collection",err);
				} else if (result.lenght) {
					res.render('studentlist', {
						"studenlist" : result
					});
				} else {
					res.send('no documents found but connected to db');
				}
				db.close();
			})
		}
	})
})
module.exports = router;