import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  workspaces: defineTable({
    userId: v.id("users"),
    name: v.string(),
    joinCode: v.string(),
  }),
});

export default schema;
