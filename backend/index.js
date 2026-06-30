const corsHeaders = {
  "Access-Control-Allow-Origin": "https://add-frontend.baparao2005.workers.dev",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: corsHeaders
  });
}

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders
      });
    }

    const url = new URL(request.url);

    if (url.pathname === "/" && request.method === "GET") {
      return json({ message: "Backend is running" });
    }

    if (url.pathname === "/users" && request.method === "GET") {
      return json({ message: "Request from GET method" });
    }

    if (url.pathname === "/users" && request.method === "POST") {
      const body = await request.json();

      return json({
        message: "User Created",
        data: body
      });
    }

    if (url.pathname === "/add" && request.method === "POST") {
      const body = await request.json();

      return json({
        message: "success",
        data: Number(body.a) + Number(body.b)
      });
    }

    return json({ message: "Route not found" }, 404);
  }
};