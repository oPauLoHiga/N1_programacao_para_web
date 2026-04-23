import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={["card", className].filter(Boolean).join(" ")}>{children}</article>;
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={["card-body", className].filter(Boolean).join(" ")}>{children}</div>
  );
}
