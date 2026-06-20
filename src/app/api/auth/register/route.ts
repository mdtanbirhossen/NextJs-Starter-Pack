type RegisterBody = {
    email?: string;
    password?: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as RegisterBody;

        if (!body.email || !body.password) {
            return Response.json(
                { message: "Email and password are required." },
                { status: 400 }
            );
        }

        const user = {
            id: "123",
            email: body.email
        };

        const response = {
            user,
            accessToken: "your-access-token",
            refreshToken: "your-refresh-token"
        };

        return Response.json(response, {
            status: 201
        });

    } catch (reason) {
        const message =
            reason instanceof Error ? reason.message : "Unexpected error";

        return Response.json(
            { message },
            { status: 500 }
        );
    }
}
