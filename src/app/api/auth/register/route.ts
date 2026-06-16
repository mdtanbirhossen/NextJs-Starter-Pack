export async function POST(request: Request) {
    try {
        console.log("Received registration request");

        const user = {
            id: "123",
            email: "test@example.com"
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