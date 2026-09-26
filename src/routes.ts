import { Router } from 'express';

import PingController from '@controllers/PingController';
import UsersController from '@controllers/UsersController';

import { ValidateMiddleware } from './middlewares/ValidateMiddleware';

import { createUserSchema } from './schemas/user.schema';

const routes = Router();

const pingController = new PingController();
const usersController = new UsersController();

routes.get('/ping', pingController.index);

routes.post(
    "/users",
    ValidateMiddleware.validate(createUserSchema),
    usersController.create
);

export default routes;
