import { User } from '@prisma/client';
import 'express';

declare module 'express' {
    export interface Request {
        user?: Omit<User, 'password'>;
    }
}
