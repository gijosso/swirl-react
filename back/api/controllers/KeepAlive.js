'use strict';

const response = require('../../tools/response');
const resource = require('../../tools/resource');

const expLapse = 3 * 60;

//GET /keepAlive/
exports.keepAlive = function (req, res) {
    try {
        const token = req.cookies.token;
        if (token !== undefined) {
            for (let login in resource.tokens) {
                if (resource.tokens.hasOwnProperty(login)) {
                    if (resource.tokens[login].token === token) {
                        if (resource.tokens[login].expiration - Date.now() > 0) {
                            resource.tokens[login].expiration = Date.now() + (expLapse * 60 * 60);
                            res.status(200);
                            res.send(response(resource.tokens[login].token, 'keepAlive', null));
                        }
                        else {
                            res.status(401);
                            res.send(response(null, 'keepAlive', 'session expired: user need to log again'));
                        }
                        return;
                    }
                }
            }
            res.status(403);
            res.send(response(null, 'keepAlive', 'invalid session: session forgery ?'));
        }
        else {
            res.status(400);
            res.send(response(null, 'keepAlive', 'no session: user need to be logged'));
        }
    } catch (e) {
        res.status(500);
        res.send(response(null, 'keepAlive', e.message));
    }
};