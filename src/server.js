var http = require('http');
var formidable = require("formidable");
var util = require('util');

var languages = {
    data: {
        languages: [
            'English', 'Spanish', 'German', 'Dutch', 'Other'
        ]
    }
}

var server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    switch(req.method.toLowerCase()) {
        case 'post':
            processForm(req, res);
            return;
        break;
        case 'get':
            processLanguages(req, res)
            return;
        default: 
            console.log('unsupported method:' + req.method);
    }

    res.end();
});

function processLanguages(req, res) {
    var data = JSON.stringify(languages);
    console.log('get: ', data);
    res.end(data);
    return;
}

function processForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields) {

        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        
        fields.id = "ABC123";

        var data = JSON.stringify({
            fields: fields
        });

        res.end(data);

        console.log('posted fields:\n');
        console.log(data);
    });
}

var port = 3100;
server.listen(port);
console.log("server listening on port " + port);
