export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/" && request.method === "GET") {
      return Response.json({ message: "Backend is running" });
    }

    if (url.pathname === "/users" && request.method === "GET") {
      return Response.json({ message: "Request from GET method" });
    }

    if (url.pathname === "/users" && request.method === "POST") {
      const body = await request.json();

      return Response.json({
        message: "User Created",
        data: body
      });
    }

    if (url.pathname === "/add" && request.method === "POST") {
      const body = await request.json();

      return Response.json({
        message: "success",
        data: Number(body.a) + Number(body.b)
      });
    }

    return Response.json({ message: "Route not found" }, { status: 404 });
  }
};