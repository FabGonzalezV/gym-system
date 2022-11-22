import UsersRoute from './app/controllers/UserRoute';
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');



class Index {
    static app = express();
    static router = express.Router();

    static main() {


        dotenv.config();
        Index.setUpServer();
        Index.setDatabase();
    }

    //method server

    static setUpServer() {
        //establishing middleware cors and express.json
        Index.app.use(cors());
        Index.app.use(express.json());
        //configuring routes directory
        Index.app.use('/api/v1/Users', UsersRoute.configRoutes(Index.router));
        Index.app.use('*', (req, resp) => {
            resp.status(404).json({ error: 'not found' });
        });
    }

    //db method

    static async setDatabase() {
        const client = new mongodb.MongoClient(process.env.USERCONTROLLER_DB_URI);
        const port = process.env.PORT || 8000;
        try {
            // Connect to the MongoDB cluster
            await client.connect();
            Index.app.listen(port, () => {
                console.log(`server is running on port:${port}`);
            });
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }

}
Index.main();
