import { connectToDatabase } from "@/lib/database/connect.database";
import { User } from "@/lib/model/user.model";
import { genSalt, hash } from "bcryptjs";
import { generateToken } from "./auth.utils";
import { setAuthCookie } from "./auth.cookies";
import { RegisterSchema } from "./auth.validation";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  // 1. Validate input
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  RegisterSchema.parse({ name, email, password });

  // 2. Connect database
  await connectToDatabase();

  // 3. Check if user exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // 4. Hash password
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  // 5. Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // 6. Generate token
  const token = await generateToken({
    id: user._id.toString(),
    email: user.email,
  });

  // 7. Set auth cookie
  await setAuthCookie(token);

  // 8. Return safe user object
  const userObject = user.toObject();
  const { password: _, ...safeUser } = userObject;

  return safeUser;
};

export const signInUser = async (email: string, password: string) => {
  // 1. Validate Input
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  // 2. Check user exists or not
  // 3.
};
