import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    return NextResponse.json(
      {
        success: true,
        error: null,
        message: "/POST Request Sent Successfully.",
        body,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown Error Occured.",
        message: "Internal Server Error.",
      },
      { status: 500 },
    );
  }
};
