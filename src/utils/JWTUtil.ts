import jwt from 'jsonwebtoken';

export class JWTUtil
{
    public static signUserToken(id: string): string {
        const token = jwt.sign({ userId: id }, process.env.JWT_SECRET as string, {
            expiresIn: '7d',
        });

        return token;
    }

    public static getUserIdByToken(token: string): string | false {
        const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };

        if (!payload) {
            return false;
        }

        return payload.userId;
    }
}
