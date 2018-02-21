// @flow
import { ADD, REMOVE } from '../../reducers/user/';

export const add = (name: string) => ({ type: ADD, login, password});
export const remove = (id: number) => ({ type: REMOVE, id });