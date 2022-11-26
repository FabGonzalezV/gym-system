import UsersDAO from './../../dao/UsersDAO.js';


export default class UsersController {

    static async apiInsertUser(req, res, next) {
        try {
            const user = req.body;
            if(!user) {
              return res.status(400).json({error: 'No hay datos'});
            }

            const { name } = req.body;
            const {lastName} = req.body;
            const {age} = req.body;
            const {height} = req.body;
            const {weight} = req.body;
            const {email} = req.body;
            const {instalment} = req.body;
              
            await UsersDAO.insertUser(name, lastName, age, height, weight, email, instalment);
            //res.json({ status: 'success' });
            res.render('usersView.ejs')
            //return res.status(200).json(user);
        }
        catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}