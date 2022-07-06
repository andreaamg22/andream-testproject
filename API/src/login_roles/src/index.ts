import * as express from "express"
import { AppDataSource } from "./data-source"
import * as cors from 'cors'
import * as helmet from 'helmet'
import routes from "./routes"
const PORT = process.env.PORT || 3000


AppDataSource.initialize().then(async () => {

    // create express app
    const app = express();
    // Middlewares
    app.use(cors());
    
    app.use(express.json());
    //Routes
    app.use('/', routes);

    // start express server
    app.listen(PORT,()=> console.log(`server running on ${PORT}`));



}).catch(error => console.log(error))
