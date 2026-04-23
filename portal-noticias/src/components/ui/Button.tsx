import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "danger";

function classForVariant(variant: ButtonVariant) {
  if (variant === "primary") return "button";
  if (variant === "secondary") return "button secondary";
  return "button danger";
}

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  const cls = [classForVariant(variant), className].filter(Boolean).join(" ").trim();

  if (to) {
    return (
      <Link className={cls} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
