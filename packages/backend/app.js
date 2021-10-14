const express = require('express')
const app = express()
const port = 3001

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send('Hello from Express server!')
})

app.listen(port, () => {
  console.log('Express server listening at http://localhost:'+port);
})
