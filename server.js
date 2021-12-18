// const express = require('express');
// const app = express();
// // Run the app by serving the static files
// // in the dist directory //
// app.use(express.static(__dirname + '/dist'));
// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);

app.use(express.static('./dist/<name-on-package.json>'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/<name-on-package.json>/' }
    );
});
app.listen(process.env.PORT || 8080);

console.log('Server running at http://localhost:8080');