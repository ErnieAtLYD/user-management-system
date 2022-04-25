import { Request, Response } from 'express';
import User from '../models/user';
import { IUser } from '../types';

async function getAllUsers(_req: Request, res: Response) {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving users.',
    });
  }
}

interface IParamID {
  id: number;
}

async function getUserById(req: Request<IParamID, {}, {}, {}>, res) {
  try {
    const user: IUser | undefined = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send({
        message: 'User not found with id ' + req.params.id,
      });
      return;
    }
    res.send(user);
  } catch (err) {
    res.status(500).send({
      message: 'Error retrieving user with id ' + req.params.id,
    });
  }
}

async function createUser(req: Request, res: Response) {
  try {
    const newObj = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
    };

    const data: IUser = await User.create(newObj);
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while creating the User.',
    });
  }
}

async function updateUser(
  req: Request<IParamID, {}, IUser, {}>,
  res: Response
) {
  try {
    const id = req.params.id;
    const user: IUser | undefined = await User.update(id, req.body);
    if (!user) {
      res.status(404).send({
        message: 'User not found with id ' + id,
      });
      return;
    }
    res.status(204).send(user);
  } catch (err) {
    res.status(500).send({
      message: 'Error updating user with id ' + req.params.id,
    });
  }
}

async function deleteUser(req: Request<IParamID, {}, {}, {}>, res: Response) {
  try {
    const id = req.params.id;
    await User.remove(id);
    res.send({ message: 'User deleted successfully!' });
  } catch (err) {
    res.status(500).send({
      message: 'Could not delete user with id ' + req.params.id,
    });
  }
}

export default { getAllUsers, getUserById, createUser, updateUser, deleteUser };
