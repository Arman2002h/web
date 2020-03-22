const PORT = 3000;

let express = require('express');
const bodyParser = require('body-parser');

const user = require('./app/user.js');
const login = require('./app/login.js');
const register = require('./app/register.js');

const shop = require('./app/shop.js')('shop.ejs');
const home = require('./app/shop.js')('home.ejs');

const admin = require('./app/ADMIN/admin.js');

// console.log()
let session = require('cookie-session');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    name: 'session',
    keys: ['key1', 'key2'],
    cookie: { secure: true,
        httpOnly: true,
        domain: 'localhost:'+PORT,
        path: 'foo/bar',
        expires: new Date( Date.now() + 60 * 60 * 1000 )
    }
}))

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

app.get('/login'   , login);
app.get('/register', register);

app.post('/user/:f', user);

app.get('/',  home);
app.get('/shop',  shop);
app.get('/admin', admin)
app.get('*', ( req, res)=>res.redirect('/'));
app.post('*', ( req, res)=>res.redirect('/'));

app.listen(PORT,err => console.log(err || `useing port ${PORT}`));