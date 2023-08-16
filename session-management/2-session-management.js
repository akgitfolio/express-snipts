const session = require('express-session');
const app = express();

app.use(session({ secret: 'mySecret', resave: false, saveUninitialized: false }));
