export default class UsersRoute {

    static configRoutes(router) {
        router.route('/').get((req, res) => res.send('hello world'));
        return router;
    }

}

 