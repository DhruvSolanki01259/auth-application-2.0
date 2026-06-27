import jwt from "jsonwebtoken";
import { JwtPayload } from "./auth.type";
import { JWT_EXPIRES_IN } from "./auth.constant";

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = async (payload: JwtPayload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};
