import * as bcrypt from 'bcryptjs';

const checkPassword = (password: string, hash: string) => {
  const check = bcrypt.compareSync(password, hash);

  return check;
};

export default checkPassword;
