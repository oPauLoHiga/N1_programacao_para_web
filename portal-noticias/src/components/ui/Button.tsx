import type { ReactNode } from "react";
import { Link } from "react-router";

type ButtonVariant = "primary" | "secondary" | "danger" | "success";

function classForVariant(variant: ButtonVariant) {
  if (variant === "primary") return "button";
  if (variant === "secondary") return "button secondary";
  if (variant === "danger") return "button danger";
  return "button button--success";
}

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  block?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  className = "",
  block = false,
  onClick,
}: ButtonProps) {
  const cls = [
    classForVariant(variant),
    block ? "button--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

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
