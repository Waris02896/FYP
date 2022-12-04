const express = require('express');
const { projectlist } = require('../controllers/project/project');
const router = express.Router();

router.get('/projects', projectlist);

module.exports = router;