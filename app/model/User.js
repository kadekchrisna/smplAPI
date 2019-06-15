const Sequelize = require('sequelize')
const Model = Sequelize.Model
const db = require('../config/db')
const Post = require('../model/Post')

class User extends Model { }
User.init({
    id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
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
        modelName: 'users'
    })
User.hasMany(Post, { as: 'posts', foreignKey: 'user_id' })

module.exports = User