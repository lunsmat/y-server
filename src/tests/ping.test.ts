import { test, expect } from 'vitest';
import request from 'supertest';
import app from '../app';

test('It should be okay', async () => {
    const response = await request(app).get('/ping');

    expect(response.body).toMatchObject({ pong: true });
});
