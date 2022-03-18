import { NextFunction, Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';

const emailValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return res.status(StatusCode.Unauthorized).json({ message: 'All fields must be filled' });
  }

  if (regexEmail.test(email)) {
    return next();
  }

  return res.status(StatusCode.Unauthorized).json({ message: 'Incorrect email or password' });
};

export default emailValidation;
