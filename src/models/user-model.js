'use strict';

require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const SECRET = process.env.SECRET || "MY SECRET";


const usersModel = (sequelize, DataTypes) => {
    const userModel = sequelize.define('users', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        role: {
            type: DataTypes.ENUM('student', 'instructor', 'admin'),
            defaultValue: 'student',
            required: true,
        },

        token: {
            type: DataTypes.VIRTUAL,
            get() {
                return jwt.sign({ userName: this.userName }, SECRET);
            },
            set(tokenObj) {
                let token = jwt.sign(tokenObj, SECRET);
                return token;
            },
        },

        capabilities: {
            type: DataTypes.VIRTUAL,
            get() {
                const acl = {
                    student: ['read'],
                    instructor: ['read', 'create', 'update'],
                    admin: ['read', 'create', 'update', 'delete']
                };
                return acl[this.role];
            }
        }
    });

    userModel.beforeCreate(async (user) => {
        let hashedPass = await bcrypt.hash(user.password, 10);
        user.password = hashedPass;
    });

    userModel.authenticateBasic =  async function (userName , password) {
        const user = await this.findOne({ where: { userName }});
        const valid = await bcrypt.compare(password , user.password);

        if (valid) {
            return user;
        }
        throw new Error("Invalid User");
    }

    userModel.authenticateToken = async function (token){
        try{
            const parsedToken = jwt.verify(token , SECRET);
            const user = await this.findOne({ where : {userName : parsedToken.userName}})
            if (user) { 
                return user;
             }
            throw new Error("User Not Found")
        } catch (error){
            throw new Error(error.message)
        }
    }

    return userModel;
}

module.exports = usersModel;