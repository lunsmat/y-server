import { test, expect } from 'vitest';
import request from 'supertest';
import app from '../app';

test('It should return the total user count', async () => {
    const response = await request(app).get('/users/count');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("count");
    expect(typeof response.body.count).toBe('number');
});
