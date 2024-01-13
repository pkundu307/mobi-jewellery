const express = require('express');
const contactUsController = require('../controller/Issue');


const router = express.Router();

// Route to create a new issue
router.post('/create-issue', contactUsController.createIssue);

// Route to get all issues
router.get('/get-all-issues', contactUsController.getAllIssues);

module.exports = router;
