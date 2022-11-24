 
export default class UsersDAO {
    static users;
    static async injectDB(conn) {
        if (UsersDAO.users) {
            return;
        }
        try {
            UsersDAO.users = await conn.db(process.env.USERCONTROLLER_NS)
                .collection('users');
                 
        } catch (e) {
            console.error(`unable to connect in UsersDAO: ${e}`);
        }
    }

    static async insertUser(name, lastName, age, height, weight, email, instalment) {
        try {
            const user = {
                name: name,
                lastName: lastName,
                age: age,
                height: height,
                weight: weight,
                email: email,
                instalment: instalment
            }
           // console.log(user)
            return await UsersDAO.users.insertOne(user);

        } catch (e) {
            console.log(e);
        }
    }
}