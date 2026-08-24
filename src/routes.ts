import { Router } from 'express';

import PingController from '@controllers/PingControler';
import UsersController from '@controllers/UsersController';

const routes = Router();

const pingController = new PingController();
const usersController = new UsersController();

routes.get('/ping', pingController.index);

routes.get('/users/count', usersController.count);
routes.post("/users", usersController.create);

export default routes;
