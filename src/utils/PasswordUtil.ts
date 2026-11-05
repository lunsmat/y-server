import bcrypt from 'bcrypt';

export class PasswordUtil
{
    static async hash(password: string): Promise<string>
    {
        const hash = await bcrypt.hash(password, 12);

        return hash;
    }

    static async verify(password: string, hash: string): Promise<boolean>
    {
        return bcrypt.compare(password, hash);
    }
}
