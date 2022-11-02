'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  posts.init({
    title: {
      type:DataTypes.STRING
    },
    body: {
      type:DataTypes.STRING
    },
    uuid:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};