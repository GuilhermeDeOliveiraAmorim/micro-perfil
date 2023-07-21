import { ReactNode } from "react";

interface PerfilRootProps {
  children: ReactNode;
}

export default function PerfilRoot({ children }: PerfilRootProps) {
  return <div>{children}</div>;
}
