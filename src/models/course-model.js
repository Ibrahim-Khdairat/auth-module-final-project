'use strict';

const courseModel = (sequelize, DataTypes) => sequelize.define('courses' , {
    courseName : DataTypes.STRING,
    courseMajor : DataTypes.STRING,
    courseDescription : DataTypes.STRING,
    courseHours : DataTypes.INTEGER
})

module.exports = courseModel;