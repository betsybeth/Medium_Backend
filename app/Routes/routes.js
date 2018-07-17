const express = require('express');
const users = require('../controllers/controller.js');
const router = express.Router();


router.post('/user/register', users.create);

router.post('/user/login', users.create);

// router.get('/medium/blogs', blogs.findAll);
// router.get('/medium/blogs/:id', blogs.findOne);
// router.post('/medium/blogs', blogs.create);
// router.put('/medium/blogs/:id', blogs.update);
// router.delete('/medium/blogs/:id', blogs.delete);

module.exports = router;