import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodObject } from 'zod';

export class ValidateMiddleware
{
    static validate(schema: ZodObject)
    {
        return (request: Request, response: Response, next: NextFunction): Response | void => {
            try {
                schema.parse({
                    body: request.body,
                    query: request.query,
                    params: request.params
                })

                return next();
            } catch (error) {
                if (error instanceof ZodError)
                {
                    return response.status(400).json({
                        message: "Erro nos dados do usuário",
                        errors: error.issues.map(error => error.message)
                    })
                }

                return next();
            }
        }
    }
}
