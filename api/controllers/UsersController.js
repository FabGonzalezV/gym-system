import UsersDAO from './../../dao/UsersDAO.js';
 

export default class UsersController{
    static async apiInsertUser(req, res, next){
        try{
           // await UsersDAO.insertUser(req.query);
            console.log(req.body, " post")
            const query = req.body
            res.send(query);
        }
        catch(e){
            console.error(e);
        }
    }
}