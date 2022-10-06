import HttpStatus from 'http-status-codes';
import * as PeopleService from '../services/assin.service';

export const newUser = async (req, res, next) => {
    try {
      const data = await PeopleService.newUser(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'people data created successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  export const getAllUsers = async (req, res, next) => {
    try {
      const data = await PeopleService.getAllUsers();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All people fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  export const updatePeople = async (req, res, next) => {
    try {
      const data = await PeopleService.updatePeople(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'people updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };