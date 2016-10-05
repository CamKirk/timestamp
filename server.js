var express=require('express');
var app = express();

app.get('/:date', function (req, res) {
  var date = req.params.date; //date is a string instead of a number
  console.log(date);

  var unixtime=null;
  var naturaltime=null;
  
  
   if (new Date(Number(date)).getTime()>0){
     //if unixtime, store unixtime and calc nat time
     unixtime=Number(date);
     naturaltime=new Date(Number(date)).toDateString();
     console.log("unixtime");
     
   }
   else if (new Date(date).getTime()>0){
     //if nat time, store nat time and calc unixtime
     naturaltime= new Date(date).toDateString();
     unixtime=new Date(naturaltime).getTime();
     console.log("nattime");
   }
  //else fallthru, dateobj variables remain null
  
  
  var dateobj={
    unix:unixtime,
    natural:naturaltime
    };  
  //console.log(dateobj);
  res.send(dateobj);
  
});

app.listen(8080, function () {
  console.log('Timestamp listening on port 8080!');
});