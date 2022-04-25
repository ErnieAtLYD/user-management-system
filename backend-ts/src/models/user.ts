import db from '../db';
import { IUser } from '../types';
const tableName = 'users';

const findAll = () => db(tableName).select();

const findById = (id: number) => db(tableName).where({ id }).first();

const remove = (id: number) => db(tableName).where({ id }).del();

const update = async (id: number, body: IUser) => {
  delete body.created_at; // not allowed to update created_at
  delete body.updated_at; // not allowed to update updated_at
  delete body.id; // not allowed to edit an ID
  await db(tableName).where({ id }).update(body);
  return await findById(id);
};

const create = async (body: IUser) => {
  delete body.id; // not allowed to set an ID
  const postIdArr = await db(tableName).insert(body);
  return postIdArr[0] && findById(postIdArr[0]);
};

export = {
  findAll,
  findById,
  remove,
  update,
  create,
};
