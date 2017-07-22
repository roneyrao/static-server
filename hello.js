const url = require('url');
module.exports=function(req, res){
	if(url.parse(req.url).pathname=='/upload'){
		res.setHeader('Content-type', 'text/html');
		res.end('<h1>aaaaaaaaaaa</h1>');
		return true;
	}
};
