import { Request, Response } from 'express';
import StatusCode from '../utils/StatusCode';
import LoginService from '../services/loginService';

const LoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const response = await LoginService({ email, password });

  if (!response.user) {
    return res.status(StatusCode.Unauthorized).json(response);
  }

  res.status(StatusCode.OK).json(response);
};

export default LoginController;
