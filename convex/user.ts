import { auth } from "./auth";
import { query } from "./_generated/server";

export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await auth.getUserId(ctx); // Get the user ID from the context
    if (!userId) {
      return null;
    }

    return await ctx.db.get(userId);
  },
});
