export default class UsersDAO {
    static users;
    static async injectDB(conn) {
        if (UsersDAO.users) {
            return;
        }
        try {
            UsersDAO.users = await conn.db(process.env.USERSCONTROLLER_NS)
                .collection('users');
                console.log("conectado con users")
        } catch (e) {
            console.error(`unable to connect in UsersDAO: ${e}`);
        }
    }

    static async insertUser(user){
        try {
           const result =  await UsersDAO.users.insertMany(user);
           console.log(result.insertedIds," completed");
        } catch (e) {
            console.log(e);
        } 
    }
}