const User = require('../Models/User.js');

exports.create = (req, res) => {
    if(!req.body.content){
        return res.status(400).send({
            message:'User cannot be empty'
        });
    }

    const user = new User({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
    });

    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:err.message
            });
        });
};