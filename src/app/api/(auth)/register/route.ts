import { registerUser } from "@/modules/auth/auth.service";
import { errorHandler } from "@/utils/error.handler";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();

    const user = await registerUser(name, email, password);

    return NextResponse.json(
      {
        success: true,
        error: null,
        message: "/POST Request Sent Successfully.",
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unkown Error Occured";

    if (errorMessage === "User already exists") {
      return errorHandler(409, errorMessage);
    }

    return NextResponse.json(
      {
        success: false,
        error,
        message: "Internal Server Error.",
      },
      { status: 500 },
    );
  }
};
