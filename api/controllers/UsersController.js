import UsersDAO from './../../dao/UsersDAO.js';
 

export default class UsersController{
    static async apiInsertUsert(req, res, next){
        try{
            await UsersDAO.insertUser(req.query);
        }
        catch(e){
            console.error(e);
        }
    }
}