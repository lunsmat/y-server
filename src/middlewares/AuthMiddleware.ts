import { Request, Response, NextFunction } from 'express';
import { JWTUtil } from '../utils/JWTUtil';
import { UserService } from '@services/UserService';

const userService = new UserService();

export class AuthMiddleware
{

    static async check(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<Response | void> {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            return response.status(401).json({
                error: true,
                message: "Token não fornecido",
                errors: ["Header Authorization ausente"]
            });
        }

        const parts = authHeader.split(' ');

        if (parts.length !== 2) {
            return response.status(401).json({
                error: true,
                message: "Erro no formato do token",
                errors: ["Formato esperado: Bearer <token>"]
            });
        }

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return response.status(401).json({
                error: true,
                message: "Token mal formatado",
                errors: ["O token deve começar com Bearer"]
            });
        }

        const userId = JWTUtil.getUserIdByToken(token);

        if (!userId) {
            return response.status(401).json({
                error: true,
                message: "Token inválido ou expirado",
                errors: ["Faça login novamente para obter um novo token"]
            });
        }

        const user = await userService.getUserById(userId);

        if (!user) {
            return response.status(401).json({
                error: true,
                message: "Usuário não encontrado",
                errors: ["O usuário associado a este token não existe mais"]
            });
        }

        const { password, ...userWithoutPassword } = user;
        request.user = userWithoutPassword;

        return next();
    }
}

