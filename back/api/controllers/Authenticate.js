'use strict';

const uniqid = require('uniqid');
const response = require('../../tools/response');
const resource = require('../../tools/resource');

const expLapse = 3 * 60;

//POST /authenticate/
exports.authenticate = function (req, res) {
    try {
        const login = req.body.login;
        const password = req.body.password;
        if (login !== undefined && login !== '' && password !== undefined && password !== '') {
            for (let i = 0; i < Number(resource.users.length); i++) {
                if (resource.users[i].login === login && resource.users[i].password === password) {
                    if (resource.tokens[login] !== undefined && (resource.tokens[login].expiration - Date.now()) > 0) {
                        res.status(200);
                        res.send(response(login, 'authenticate: already logged', null));
                    }
                    else {
                        resource.tokens[login] = { "token": uniqid(), "expiration": Date.now() + (expLapse * 60 * 60)};
                        res.cookie('token', resource.tokens[login].token, {httpOnly: true});
                        res.status(201);
                        res.send(response(login, 'authenticate', null));
                    }
                    return;
                }
            }
            res.status(404);
            res.send(response(null, 'authenticate', 'unknown credentials'));
        }
        else {
            res.status(400);
            res.send(response(null, 'authenticate', 'missing fields'));
        }
    } catch (e) {
        res.status(500);
        res.send(response(null, 'authenticate', e.message));
    }
};