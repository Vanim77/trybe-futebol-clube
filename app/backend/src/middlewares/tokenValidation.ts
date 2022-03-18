import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { readFileSync } from 'fs';
import StatusCode from '../utils/StatusCode';

export interface JwtPayload {
  data: {
    email: string,
  },
  iat: number,
  exp: number
}

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const secret = readFileSync('jwt.evaluation.key', 'utf-8');

  if (!token) {
    return res.status(StatusCode.NotFound).json({ error: 'Token not found' });
  }

  try {
    const payload = verify(token, secret) as JwtPayload;

    req.body.email = payload.data.email;

    next();
  } catch (error) {
    return res.status(StatusCode.Unauthorized).json({ error: 'Invalid token' });
  }
};

export default tokenValidation;
