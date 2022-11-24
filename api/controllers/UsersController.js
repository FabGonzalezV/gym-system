import UsersDAO from './../../dao/UsersDAO.js';


export default class UsersController {

    static async apiInsertUser(req, res, next) {
        try {
            const { name } = req.body;
            const {lastName} = req.body;
            const {age} = req.body;
            const {height} = req.body;
            const {weight} = req.body;
            const {email} = req.body;
            const {instalment} = req.body;
             
            await UsersDAO.insertUser(name, lastName, age, height, weight, email, instalment);
            res.json({ status: 'success' });

        }
        catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}