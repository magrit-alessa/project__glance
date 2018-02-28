var express = require('express');

var app = express();

const PORT = process.evn.PORT || 3000;
app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'http'){
		next();

	}else{
      res.redirect('http://' + req.hostname + req.url);
	}
});

app.use(express.static('public'));
app.listen(PORT, function(){
	console.log('Server is up on port ' + PORT);
});