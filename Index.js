import UsersRoute from './api/controllers/UserRoute.js';
import UsersDAO from './dao/UsersDAO.js';
import dotenv from 'dotenv';
import mongodb from 'mongodb';
import cors from 'cors';
import express from 'express';



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
 
        Index.app.use('/api/v1/control', UsersRoute.configRoutes(Index.router));
        Index.app.use('*', (req, res) => {
            res.status(404).json({ error: 'not found' });
        });
    }

    //db method

    static async setDatabase() {
        const client = new mongodb.MongoClient(process.env.USERCONTROLLER_DB_URI);
        const port =   process.env.PORT || 8000
        try {
            // Connect to the MongoDB cluster
            await client.connect();
             UsersDAO.injectDB(client);
            Index.app.listen(port, () => {
                console.log(`server is running on port:${port}`);
            });
        } catch (e) {
            console.error(e);
//             client.close();
            process.exit(1);
        }
    }

}
Index.main();

