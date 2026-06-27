import { cookies } from "next/headers";

export const setAuthCookie = async (token: string) => {
  const cookieStore = await cookies();

  return cookieStore.set("token", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });
};

export const getAuthCookie = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("token")?.value;
};

export const deleteAuthCookie = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
};
