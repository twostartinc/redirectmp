export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/mp") {
      return Response.redirect("https://discord.gg/rkdt2snZE9", 302);
    }
    return new Response("Not Found", { status: 404 });
  },
};
