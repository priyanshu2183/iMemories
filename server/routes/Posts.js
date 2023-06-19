const express = require('express');
const { Posts } = require('../controllers/posts');
const router = express.Router();

router.get('/',Posts);

module.exports=router;
