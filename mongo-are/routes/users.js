var express = require('express');
var router = express.Router();

const userList = {
  u_id: "nana",
  u_pw: "nanana",
  u_email: "nananana",
  u_name: "na",
  u_nickname: "naa",
  u_role: 00,
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', (req, res)=> {
  res.json(userList);
});

router.get('/test/:query', (req, res)=> {
  let {query }= req.params;
  console.log(query);

  const tmpUserList = {...userList, u_nickname:query};
  console.table(tmpUserList)
  // userList = [...userList, u_nickname=query]
  res.json(tmpUserList);
});

module.exports = router;
