const express = require('express');
const { getTaskCategories } = require('../controllers/task/task');
const router = express.Router();

router.get("/taskCategories", getTaskCategories);

module.exports = router;