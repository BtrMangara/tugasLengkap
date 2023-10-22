const { BOOLEAN } = require('sequelize');
const {News} = require('../models')


class newsController{
    

    static async getItems(req,res){
        try {
            const result = await News.findAll();
            res.status(200).json(result);    
        } catch (error) {
            res.status(400).json(error.message);
        } 

    }

    static async createNews(req,res){
        try {
            const {title,isiBerita,category,penulis,idPenulis,image,status} = req.body;
            const result = await News.create({title,isiBerita,category,penulis,idPenulis,image,status});
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json(error.message);            
        }
    }

    static async updateNews(req, res) {
        try {
            const {title,isiBerita,category,penulis,idPenulis,image,status} = req.body;
            const {id} = req.params;

            const result = await News.update({
                title,
                isiBerita,
                category,
                penulis,
                idPenulis,
                image,
                status
            }, {
                where : {id},
                returning :true
            })
            result[0] === 1 
            ? res.status(200).json({message: `Selamat Data Berhasil Diubah`})
            : res.status(202).json({message: `Id Tidak Ditemukan`});
            // res.status(200).json(result);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async deleteNews(req, res) {
        try {
            const result = await News.destroy({where: {id:req.params.id}});
            result === 1 
                ? res.status(200).json({message: `Selamat Data Berhasil DiHapus`})
                : res.status(202).json({message: `Id Tidak Ditemukan`});
            
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async getPosting(req,res){
        try {
            const result = await News.findAll({
                where:{
                    status :true
                }
            })
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async updateStatus(req, res){
        try {
            const status = req.body.status;
            const result = await News.update({
                status : status
            },
            {
                where : {id:req.params.id},
                returning:true
            });
            
            // res.status(200).json({message:`Data Berhasil Diubah Menjadi ${status}`});
            res.send(result)
        } catch (error) {
            res.status(404).json(error.message);
        }
    }

    static async getDetail(req,res){
        try {
            const id = req.params.id;
            const result = await News.findOne({where : {id}})
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json(error.message)
        }
    }

}

module.exports = newsController;