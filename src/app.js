const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home');
const adminRouter = require('./routes/admin');

const app = express();
const port = 3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.resolve('src', 'views'));

app.use(express.static(path.resolve('src', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(homeRouter);
app.use('/admin', adminRouter);

app.listen(port, () => console.log(`🚀 The server is running at port ${port} 🚀`));