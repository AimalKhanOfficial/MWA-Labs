//Step#1 - Install and Resolve
var express = require('express');

var gradesApp = require('./myCustomRoutes/grades');

//Step#2 - Initiate
var app = express();

//Step#3 - Configuration
app.use(express.json());

app.use('/api/grades', gradesApp);

//Step#7 - Boot App
app.listen(3000, () => {
    console.log("Started listening on port 3000.");
});

