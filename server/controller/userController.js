const {User} = require("../models");

class userController{

static async getUser(req,res){
    try {
        const result = await User.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json(error.message)
    }
}

static async login(req,res){
    try {
        const {email, password} = req.body;
        const user = await User.findOne({
            where: {email}
        });

        if(user){
            if(password === user.password){
                res.status(200).json(user);
            }
            else{
                res.status(400).json({message: 'Password Salah'});
            }
        }
        else{
            res.status(404).json({message: `Email ${email} Tidak Terdaftar`})
        }
    } catch (error) {
        res.status(404).json({message:`Login Gagal!`})
    }
}

}

module.exports= userController;