import { Router } from 'express';

import PingController from '@controllers/PingController';
import UsersController from '@controllers/UsersController';

const routes = Router();

const pingController = new PingController();
const usersController = new UsersController();

routes.get('/ping', pingController.index);

routes.post("/users", usersController.create);

export default routes;
