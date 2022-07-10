 import request from "request";

var oauth ={
    consumer_key: 'BAPDmD2J0aPPMXog6EAAlTBIGsEJOwCQN13Dn9GKCAy76ZiKb4',
    consumer_secret: 'imbQ4459wKN81aMgMJjSVTMg87N03g9vi1xnCqJYmhGDupNJRr',
};
var url = 'https://www.tumblr.com/oauth/request_token'

request.post({url:url, oauth:oauth}, function (e, r, body) {
    var temp1 = body.split("&");
   var auth_token=temp1[0].split("=")[1];
   var auth_secret=temp1[1].split("=")[1];
   var tokens=[auth_token,auth_secret];
    console.log(temp1)
    // cb(undefined,{d:tokens});
})