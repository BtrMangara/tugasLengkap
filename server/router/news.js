const newsRoute = require('express').Router();
const newsController = require('../controller/newsController');

newsRoute.get('/',newsController.getItems)
newsRoute.post('/addNews',newsController.createNews);
newsRoute.put('/updateNews/:id',newsController.updateNews);
newsRoute.delete('/deleteNews/:id',newsController.deleteNews);
newsRoute.get('/getPosting',newsController.getPosting);
newsRoute.put('/updateStatus/:id',newsController.updateStatus);
newsRoute.get('/getDetail/:id',newsController.getDetail);

module.exports = newsRoute