import auth from '../utils/auth';
import Users from '../database/models/Users';
import checkPassword from '../utils/checkPassword';

export interface ILogin {
  email: string,
  password: string,
}

const login = async ({ email, password }: ILogin) => {
  const token = auth(email);

  const user = await Users.findOne({ where: { email } });

  if (!user) { return { message: 'Bad Request' }; }

  const check = checkPassword(password, user.password);

  if (check === false) { return { message: 'Incorrect email or password' }; }

  return {
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      email,
    },
    token,
  };
};

const checkLoginRole = async (email: string) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) { return { message: 'Bad Request' }; }

  return { role: user.role };
};

export default {
  login,
  checkLoginRole,
};
