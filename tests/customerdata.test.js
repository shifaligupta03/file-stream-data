const request = require('supertest');
let server;

describe('get customer data from database',()=>{
    beforeEach(()=>{
        server = require('../index');
    })
    afterEach(()=>{
        server.close();
    });
    it('should return a response', async()=>{
        const res = await request(server).get('/get-customers');
        expect(res.body[0]).toHaveProperty('id', 1 );
    });
});

describe('streamdata from one file to another',()=>{
    beforeEach(()=>{
        server = require('../index');
        jest.setTimeout(500000);
    })
    afterEach(()=>{
        server.close();
    });
    it('should return a response', async()=>{
        const res = await request(server).get('/data');
        expect(res.status).toBe(200);
    });
});
