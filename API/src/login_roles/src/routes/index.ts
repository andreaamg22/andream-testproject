import { Router } from "express";
import auth from './auth';
import user from './user';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);

// localhost: 3000/auth/login
// localhost: 3000/auth/users

export default routes;