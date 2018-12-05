'use strict';

const Router = require('koa-router');
const router = new Router();
const ApiV1  = new Router({ prefix: '/api/v1' });

router.get('/some-public-route', ctx => {
    ctx.body = 'hello world';
});

ApiV1.get('/some-api', ctx => {
    ctx.type = 'json';
    ctx.body = {message: 'hello world'};
});

module.exports = [router, ApiV1];
