var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  if(q.pathname == "/"){
    var filename = "./index.html"
  }else{
    var filename = "." + q.pathname + ".html";
  }
  
  fs.readFile(filename, function(err, data) {
    if (err) {
      fs.readFile("404.html" , function(err , dat){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(dat);
        return res.end()
      })
    } else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }
    
  });
}).listen(8080);