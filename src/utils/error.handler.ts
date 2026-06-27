import { NextResponse } from "next/server";

export const errorHandler = (statusCode: number, errorMessage: string) => {
  return NextResponse.json(
    {
      success: false,
      error: true,
      message: errorMessage,
    },
    { status: statusCode },
  );
};
