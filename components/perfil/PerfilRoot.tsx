import { ReactNode } from "react";

interface PerfilRootProps {
  children: ReactNode;
}

export const PerfilRoot = ({ children }: PerfilRootProps) => {
  return <div>{children}</div>;
};
