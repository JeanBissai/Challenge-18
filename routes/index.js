const router = require('express').Router();
const ApiRoutes = require('./ApiRoutes');
const studentRoutes = require('./studentRoutes');

router.use('/courses', ApiRoutes);
router.use('/students', studentRoutes);

module.exports = router;
