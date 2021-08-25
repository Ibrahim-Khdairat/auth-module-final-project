'use strict';

'use strict';

const express = require('express');
const courseRouter = express.Router();


const { User, Course } = require('../models/index');
const basicauth = require('../middleware/basic-auth');
const bearerAuth = require('../middleware/bearer-auth');
const permissions = require('../middleware/acl');


courseRouter.post('/addcourse', bearerAuth, permissions('create'), async (req, res, next) => {
    let courseInfo = req.body;
    try {
        const courseRecord = await Course.create(courseInfo);
        const courseOutput = {
            course: courseRecord
        }
        res.status(201).json(courseOutput);
    } catch (e) {
        next(e.message)
    }
});

courseRouter.get('/allCourses', bearerAuth, permissions('read'), async (req, res, next) => {

    const coursesRecord = await Course.get();
    const courseOutput = {
        courses: coursesRecord
    }
    res.status(201).json(courseOutput);
});

courseRouter.delete('/deleteCourse', bearerAuth, permissions('delete'), async (req, res, next) => {
    const courseId = Number(req.body.id)
    await Course.delete(courseId)

    const coursesRecord = await Course.get();
    const courseOutput = {
        courses: coursesRecord
    }
    res.status(201).json(courseOutput);
});


courseRouter.put('/updateCourse/:id', bearerAuth, permissions('update'), async (req, res, next) => {
    const courseInfo = req.body;
    const courseId = Number(req.params.id);


    const coursesRecord = await Course.update(courseId,courseInfo);
    const courseOutput = {
        courses: coursesRecord
    }
    res.status(201).json(courseOutput);
});



module.exports = courseRouter;