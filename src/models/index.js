'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const userModel = require('./user-model');
const courseModel = require('./course-model');
const Collection =  require('./library/collection');


const SQL_DATABASE_URL = process.env.SQL_DATABASE_URL;

const sequelize =  new Sequelize(SQL_DATABASE_URL , {});

const course = courseModel(sequelize , DataTypes);
const user = userModel(sequelize , DataTypes);

const courseCollection = new Collection (course);



module.exports = {
    db : sequelize,
    Course : courseCollection,
    User : user
}

