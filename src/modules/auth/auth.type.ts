export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export type SigninInput = {
  email: string;
  password: string;
};

export type JwtPayload = {
  id: string;
  email: string;
};
