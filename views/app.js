var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('index', {
        title: 'home'
    });
});
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'movie detail page'
    });
});
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'backend operation page'
    });
});
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'backend add movie'
    });
});

app.listen(port);
console.log('server start at: http://localhost:' + port);