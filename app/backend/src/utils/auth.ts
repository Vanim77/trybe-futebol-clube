import { sign, SignOptions } from 'jsonwebtoken';

import { readFileSync } from 'fs';

const secret = readFileSync('jwt.evaluation.key', 'utf-8');

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const auth = (email: string): string => {
  const payload = {
    email,
  };

  const token = sign({ data: payload }, secret, jwtConfig);

  return token;
};

export default auth;
