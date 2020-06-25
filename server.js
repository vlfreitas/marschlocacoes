// Install express server
const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/marschlocacoes'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/marschlocacoes/index.html'));
});

// var server = http.createServer(app);

// server.listen(app.get('port'), function() {
//     console.log('Express HTTP server listening on port ' .
//         red + app.get('port'));
// });


app.listen(process.env.PORT || 8080);