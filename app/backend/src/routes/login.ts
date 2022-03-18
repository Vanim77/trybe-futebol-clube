import { Router } from 'express';
import emailValidation from '../middlewares/emailValidation';
import passwordValidation from '../middlewares/passwordValidation';
import LoginController from '../controllers/loginController';
import tokenValidation from '../middlewares/tokenValidation';

const loginRoutes = Router();

loginRoutes.post(
  '/login',
  emailValidation,
  passwordValidation,
  LoginController.login,
);

loginRoutes.get(
  '/login/validate',
  tokenValidation,
  LoginController.loginValidate,
);

export default loginRoutes;
