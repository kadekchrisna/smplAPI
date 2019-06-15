const Sequelize = require('sequelize')
const Model = Sequelize.Model

const db = require('../config/db')
const User = require('../model/User')

class Post extends Model { }
Post.init({
    id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    },

}, {
        underscored: true,
        sequelize: db,
        modelName: 'posts'
    })


Post.belongsTo(User, {
    as: 'User',
    foreignKey: 'user_id'
})

module.exports = Post