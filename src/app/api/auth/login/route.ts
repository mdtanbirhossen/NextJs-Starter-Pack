type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginBody;

    if (!body.email || !body.password) {
      return Response.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    return Response.json({
      user: {
        id: "123",
        email: body.email,
      },
      accessToken: "demo-access-token",
      refreshToken: "demo-refresh-token",
    });
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected error";

    return Response.json({ message }, { status: 500 });
  }
}
