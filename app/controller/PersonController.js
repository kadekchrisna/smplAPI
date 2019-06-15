const db = require('../config/db')
const User = require('../model/User')
const Post = require('../model/Post')

exports.index = async (req, res, next) => {
    try {

        const user = await Post.findAll({include: [User]})    
        console.log(user);
        res.send({
            data: user
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Something went wrong!'
        })
        
    }
}

exports.show = async (req, res, next) => {
    const name = req.params.name
    try {
        res.json({
            message: `GET NAME ${name}`
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            message: 'Something went wrong!'
        })
        
    }
}