import type { ReactNode } from "react";

export function Modal({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="panel" role="dialog" aria-label={title}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
