const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express();
const { API_VERSION } = require("./config");

//load routings
const authRoutes = require('./routers/auth');
const userRoutes = require("./routers/user");
const menuRoutes = require('./routers/menu');
const newsLetterRoutes = require('./routers/NewsLetter');
const courseRoutes = require('./routers/course');
const postRoutes = require('./routers/post');

app.use(cors());
app.use(bodyParser.urlencoded({limit:'50mb', extended: false}));
app.use(bodyParser.json({limit:'50mb'}));

//configure Header HTTP
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
//     );
//     res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });



//Router Basic
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, menuRoutes);
app.use(`/api/${API_VERSION}`, newsLetterRoutes);
app.use(`/api/${API_VERSION}`, courseRoutes);
app.use(`/api/${API_VERSION}`, postRoutes)

module.exports = app;
