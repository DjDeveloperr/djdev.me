import type { Handlers } from "$fresh/server.ts";
import { socials } from "../utils/social.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const social = ctx.params.social;
    const socialData = socials[social as keyof typeof socials];
    if (!socialData) {
      return new Response("Not found", { status: 404 });
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: socialData.url,
      },
    });
  },
};
