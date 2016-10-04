var express=require('express');
var app = express();

app.get('/*', function (req, res) {
  var date = new Date(req);
  console.log(date);
  var unixtime=null;
  var naturaltime=null;
  
  if(date.getTime()>0){
    if (req==null){
      //if unixtime, store unixtime and calc nat time
    }
    else if (req==null){
      //if nat time, store nat time and calc unixtime
    }
  
  }
  
  var dateobj={
    unix:unixtime,
    natural:naturaltime
    };  
  res.send(dateobj);
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});