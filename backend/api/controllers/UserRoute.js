import UsersController from './UsersController.js';
 

export default class UsersRoute {

    static configRoutes(router) {
        router.route('/')
            .get((req, res) => res.render('index')
            );

        router
            .route('/users')
            .post(UsersController.apiInsertUser);
         

        return router;
    }

}

