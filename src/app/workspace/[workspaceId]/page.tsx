interface WorkspaceIdPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdPage = ({ params }: WorkspaceIdPageProps) => {
  return <div>The ID is : {params.workspaceId}</div>;
};

export default WorkspaceIdPage;
