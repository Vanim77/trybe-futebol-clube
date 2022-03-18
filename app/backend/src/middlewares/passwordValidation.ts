import { Request, Response, NextFunction } from 'express';
import StatusCode from '../utils/StatusCode';

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(StatusCode.Unauthorized).json({ message: 'All fields must be filled' });
  }

  if (password.length > 6) {
    return next();
  }

  return res.status(StatusCode.Unauthorized).send({ message: 'Incorrect email or password' });
};

export default passwordValidation;
