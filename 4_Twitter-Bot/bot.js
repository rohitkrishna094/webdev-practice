console.log("hello");

var Twit = require('twit');

var config = require('./config.js');

var T = new Twit(config);

// Start tweeting
tweeter();

setInterval(tweeter, 1000 * 60 * 2);

function tweeter() {
    var tweet = 'This is a random number between 0 and 100: ' + Math.floor(Math.random() * 100);

    // Post the tweet
    T.post('statuses/update', { status: tweet }, tweeted);

    // callback for when the tweet is sent
    function tweeted(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success ' + data.text);
        }
    }
}