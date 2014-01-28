var request = require('request')
  , cheerio = require('cheerio')
  , exec    = require('child_process').exec;

function copy_image_url(callback) {
  request(process.argv[2], function (err, response, body) {
    if (err) {
      console.log(err);
      return callback();
    }

    var $ = cheerio.load(body)
      , imageURL = $('img').first().attr('src');

    exec('echo "' + imageURL + '" | pbcopy', function (err) {
        if (err) {
          console.log(err);
        }

        callback();
    });
  }); 
}

copy_image_url(function() {
  process.exit();
});
