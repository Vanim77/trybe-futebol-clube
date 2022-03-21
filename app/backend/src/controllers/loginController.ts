import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import LoginService from '../services/loginService';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const response = await LoginService.login({ email, password });

  if (!response.user) {
    return res.status(StatusCode.Unauthorized).json(response);
  }

  res.status(StatusCode.OK).json(response);
};

const loginValidate = async (req: Request, res: Response) => {
  const { email } = req.body;

  const response = await LoginService.checkLoginRole(email);

  if (!response.role) {
    return res.status(StatusCode.Unauthorized).json(response);
  }

  return res.status(StatusCode.OK).json(response.role);
};

export default {
  login,
  loginValidate,
};
