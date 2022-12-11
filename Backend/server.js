if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const session = require('express-session');
const sqlitestore = require('connect-sqlite3')(session);
const cookieparser = require('cookie-parser');
const { urlencoded } = require('express');

const app = express()

app.use(cookieparser());
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(session({
    store: new sqlitestore({ dir: './data/', db: 'sessions' }),
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 1 day
}));

// Routes
const register = require('./routes/auth');
const task = require('./routes/task');
const project = require('./routes/project');

app.use('/fyp',
    register,
    task,
    project
)



app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})

