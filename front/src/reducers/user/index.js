// @flow

export const ADD = 'USER_ADD';
export const REMOVE = 'USER_REMOVE';

type User = {
    id: string,
    login: string,
    password: string
};

//get api Users from actual calls
const apiUsers: Array<User> = [
    { id: 'test', login: "plop", password: "pass" },
];

const users = (state: Array<User> = apiUsers, action: Object): Array<User> => {
    switch (action.type) {
        case ADD:
            return [...state, { id: action.id, login: action.login, password: action.password }];
        case REMOVE:
            return state.filter(p => p.id !== action.id);
        default:
            return state;
    }
};

export default users;
