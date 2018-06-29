var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  //response passed as param
  getData(res);
});

async function getData(res) {
  try {
    var result = await axios.get('http://jsonplaceholder.typicode.com/users/');
    res.end(JSON.stringify(result.data));
  }
  catch (err) {
    res.end(JSON.stringify(err));
  }
}

module.exports = router;
