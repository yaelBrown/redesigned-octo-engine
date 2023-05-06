const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
  // Define Fields and Datatypes here
  {},
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Post'
  }
)

module.exports = Post