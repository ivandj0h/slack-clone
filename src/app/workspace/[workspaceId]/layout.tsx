"use client";

import { Toolbar } from "./toobar";
import { Sidebar } from "./sidebar";

interface WorspaceIdLayoutProps {
  children: React.ReactNode;
}

const WorspaceIdLayout = ({ children }: WorspaceIdLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default WorspaceIdLayout;
