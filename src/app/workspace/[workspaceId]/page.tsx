"use client";

import { useParams } from "next/navigation";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetWorkspace({ id: workspaceId });

  return (
    <div>
      <h1>Workspace ID Page {JSON.stringify(data)}</h1>
    </div>
  );
};

export default WorkspaceIdPage;
