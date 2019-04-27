var express = require('express');
var app = express();

var fn1 = function (req, res, next) {
    console.log(1);
    next();
}

var fn2 = function (req, res, next) {
    console.log(2);
    next();
}

var fn3 = function (req, res, next) {
    res.json({
        data: 123
    });
}
app.get('/', fn1, fn2, fn3);

app.listen(3000, function () {
    console.log('express is running...');
});