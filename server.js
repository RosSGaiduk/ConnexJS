function out() {
    const http = require('http');
    const port = process.env.PORT || 3000;
    const express = require('express');
    const app = express();
    let ipAddress;
    const server = http.createServer(app);
    app.get('/auth', function (req, res) {
      res.send('hello world auth');
      console.log('hello world auth 1');
    })
    app.get('/auth2', function (req, res) {
      ipAddress = req.headers['x-forwarded-for'] ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
      res.send('ip =  ' + ipAddress);
      console.log('hello world auth2');
    })
  server.listen(port,() => {
    console.log('Server running at port ' + port);
  });
}
 
out();