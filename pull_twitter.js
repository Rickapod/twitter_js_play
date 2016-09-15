var mongoose = require('mongoose');
console.log('pass mongoose')
var Twitter = require('twitter-node-client').Twitter;
console.log('pass Twitter')
var config = require('./config.json');
console.log('pass config')

var client = mongoose.connect(config.database.connection_url);
console.log('pass client')
// var db = mongoose.connect(config.database.database_name)
// console.log('pass db')
// var conn = db[config.database.collection_name]

var error = function (err, response, body){console.log('ERROR [%s]', err);};
var success = function(data) {console.log('Data [%s}', data);};
// var Twitter = require('twitter-js-client').Twitter;
var twitter = new Twitter(config.twitter);
console.log('pass twitter')
console.log(twitter)

var Tweets = twitter.getUserTimeline({screen_name: 'garciarick', count: 10}, error, success);


for (tweet in Tweets){
	console.log(tweet)
	extractedData = {};
	extractedData["type"] = "original";
	extracted_data["processed"] = "false";
	extracted_data["translated"] = "false";
	extracted_data["twitter_id"] = tweet.id_str;
	console.log(typeof (tweet.id_str));
	extracted_data["created_at"] = tweet.created_at;
	//figuer out the following for JS extracted_data["text"] = tweet.text.encode("utf-8");
	// figure out the code to export to the MongoDB collection

}


