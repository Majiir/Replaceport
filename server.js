var cons = require('consolidate');
var express = require('express');

var app = express();

app.engine('dust', cons.dust);

app.enable('trust proxy');
app.set('view engine', 'dust');
app.set('views', __dirname + '/templates');

app.listen(3000);
