import { ReactNode } from "react";

interface PerfilRootProps {
  children: ReactNode;
}

export function PerfilRoot({ children }: PerfilRootProps) {
  return <div>{children}</div>;
}
