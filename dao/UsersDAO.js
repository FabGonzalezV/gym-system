export default class UsersDAO {
    static users;
    static async injectDB(conn) {
        if (UsersDAO.users) {
            return;
        }
        try {
            UsersDAO.users = await conn.db(process.env.USERSCONTROLLER_NS)
                .collection('users');
        } catch (e) {
            console.error(`unable to connect in UsersDAO: ${e}`);
        }
    }
}