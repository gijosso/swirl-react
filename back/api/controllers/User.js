'use strict';

const uniqid = require('uniqid');
const response = require('../../tools/response');
const resource = require('../../tools/resource');

const verifyUser = function (req) {
    for (let login in resource.tokens) {
        if (resource.tokens.hasOwnProperty(login)) {
            const token = resource.tokens[login].token;
            const expiration = resource.tokens[login].expiration;
            console.log('token: ' + (token === req.cookies.token));
            if (req.cookies.token === token) {
                console.log('expiration: ' + (expiration - Date.now() > 0));
                return (expiration - Date.now()) > 0;
            }
        }
    }
    return false;
};

//GET /user/
exports.getAllUser = function (req, res) {
    if (verifyUser(req)) {
        res.send(response(resource.users, 'getAll', null));
    }
    else {
        res.status(403);
        res.send(response(null, 'getAll', 'You must be authenticated'));
    }
};

//POST /user/
exports.createUser = function (req, res) {
    try {
        if (verifyUser(req)) {
            const login = req.body.login;
            const password = req.body.password;
            if (login !== undefined && login !== '' && password !== undefined && password !== '') {
                const user = {
                    'id': uniqid(),
                    'login': login,
                    'password': password
                };
                resource.users.push(user);
                res.status(201);
                res.send(response(user, 'create', null));
            }
            else {
                res.status(400);
                res.send(response(null, 'create', 'missing fields'));
            }
        }
        else {
            res.status(403);
            res.send(response(null, 'getAll', 'You must be authenticated'));
        }
    } catch (e) {
        res.status(500);
        res.send(response(null, 'create', 'not a json'));
    }
};

//GET /user/userId
exports.getUser = function (req, res) {
    if (verifyUser(req)) {
        const id = req.params.userId;
        for (let i = 0; i < Number(resource.users.length); i++) {
            if (resource.users[i].id === id) {
                res.send(response(resource.users[i], 'get', null));
                return;
            }
        }
        res.status(404);
        res.send(response(null, 'get', 'id not found'));
    }
    else {
        res.status(403);
        res.send(response(null, 'getAll', 'You must be authenticated'));
    }
};

//DELETE /user/userId
exports.deleteUser = function (req, res) {
    if (verifyUser(req)) {
        const id = req.params.userId;
        for (let i = 0; i < Number(resource.users.length); i++) {
            if (resource.users[i].id === id) {
                const del = resource.users[i];
                resource.users.splice(i, 1);
                res.send(response(del, 'delete', null));
                return;
            }
        }
        res.status(404);
        res.send(response(null, 'delete', 'id not found'));
    }
    else {
        res.status(403);
        res.send(response(null, 'getAll', 'You must be authenticated'));
    }
};