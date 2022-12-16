const router = require('express').Router();
const userRoutes = require('./userRoutes');
const PostRoutes = require('./Post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/Posts', PostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;