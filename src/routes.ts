import { Router } from 'express';

import PingController from '@controllers/PingController';
import UsersController from '@controllers/UsersController';

import { ValidateMiddleware } from './middlewares/ValidateMiddleware';

import { createUserSchema, loginSchema } from './schemas/user.schema';
import { AuthMiddleware } from './middlewares/AuthMiddleware';

const routes = Router();

const pingController = new PingController();
const usersController = new UsersController();

routes.get('/ping', pingController.index);

routes.post(
    "/signup",
    ValidateMiddleware.validate(createUserSchema),
    usersController.create
);

routes.post(
    "/login",
    ValidateMiddleware.validate(loginSchema),
    usersController.login
);
routes.get("/me", AuthMiddleware.check, usersController.me);

export default routes;
