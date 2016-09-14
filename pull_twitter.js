var mongoose = require('mongoose');
var config = require('./config.json');
var Twitter = require('twitter-node-client').Twitter;

var client = mongoose.connect(config.database.connection_url);
var db = client[config.database.database_name]
var conn = db[config.database.collection_name]

var error = function (err, response, body){console.log('ERROR [%s]', err);};
var success = function(data) {console.log('Data [%s}', data);};
var Twitter = require('twitter-js-client').Twitter;
var TweetConfig = config.twitter;

var Tweets = twitter.getUserTimeline({screen_name: '', count: 10}, error, success);
console.log(Tweets);

for (tweet in Tweets){
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


