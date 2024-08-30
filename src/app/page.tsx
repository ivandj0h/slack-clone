"use client";

import { useEffect, useMemo } from "react";
import { UserButton } from "@/features/auth/components/user-button";
import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();
  const workspaceId = useMemo(() => data?.[0]?._id, [data]);

  useEffect(() => {
    if (isLoading) return;
    if (workspaceId) {
      console.log("workspaceId", workspaceId);
    } else {
      console.log("No workspace found");
    }
  }, [workspaceId, isLoading]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
