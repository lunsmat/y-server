import { UserService } from '@services/UserService';
import { Request, Response } from 'express';
import { PasswordUtil } from '../utils/PasswordUtil';

class UsersController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public create = async (request: Request, response: Response): Promise<Response> => {
        const { name, username, email, password } = request.body;

        const [emailExists, usernameExists] = await Promise.all([
            await this.userService.emailExists(email),
            await this.userService.usernameExists(username),
        ]);

        const errors = [] as string[];

        if (emailExists) errors.push("Email já cadastrado");
        if (usernameExists) errors.push("Username já cadastrado");

        if (errors.length > 0) return response.status(400).json({
            error: true,
            message: "Email ou Username já cadastrado",
            errors,
        });

        const hash = await PasswordUtil.hash(password);

        const user = await this.userService.create(name, username, email, hash);

        return response.status(201).json({
            error: false,
            message: "Usuário criado com sucesso!",
            data: {
                user: {
                    id: user.id,
                    name: user.name
                }
            }
        });
    }

    public login = async (request: Request, response: Response): Promise<Response> => {
        const { email, password } = request.body;

        const user = await this.userService.getUserByEmail(email);

        if (!user) return response.status(404).json({
            error: true,
            message: "Usuário não existe",
            errors: [
                "Usuário não cadastrado na base da dados"
            ]
        });

        const isPasswordRight = PasswordUtil.verify(user.password, password);

        if (!isPasswordRight) return response.status(401).json({
            error: true,
            message: "Senha incorreta",
            errors: [
                "Usuário e/ou senha incorretas"
            ]
        });

        return response.status(200).json({
            error: false,
            message: "Login feito com sucesso",
            data: {
                user
            }
        });
    }
}

export default UsersController;
