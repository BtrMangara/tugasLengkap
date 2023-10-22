const router = require("express").Router();


router.get('/',(req,res)=>{
    res.json({
    message:'Home Page'
    })
});


const newsRoutes = require('./news');
const userRoutes = require('./user');

router.use('/news', newsRoutes);
router.use('/user',userRoutes)


module.exports = router