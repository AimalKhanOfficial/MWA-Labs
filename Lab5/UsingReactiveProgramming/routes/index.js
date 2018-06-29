var express = require('express');
var router = express.Router();
var axios = require('axios');
const { from } = require("rxjs");

/* GET home page. */
router.get('/', function (req, res, next) {
  from(axios.get('http://jsonplaceholder.typicode.com/users/'))
    .subscribe(jsonRes => {
      res.end(JSON.stringify(jsonRes.data));  
    });
});

module.exports = router;
