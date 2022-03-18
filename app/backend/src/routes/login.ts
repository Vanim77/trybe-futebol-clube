import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginRoutes = Router();

loginRoutes.post('/login', LoginController);

export default loginRoutes;
