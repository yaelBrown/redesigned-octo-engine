const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Post extends Model {}

Post.init(
  // Define Fields and Datatypes here
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_type: {
      type: DataTypes.ENUM('money', 'crypto', 'finEd'),
      defaultValue: 'money'
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: ''
    }
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'Post'
  }
)

module.exports = Post