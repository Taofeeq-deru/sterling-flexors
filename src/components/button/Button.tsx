import { ReactNode } from "react";

interface RequiredProps {
  btnType?: "primary" | "secondary" | "transaparent";
  className?: string;
  text: ReactNode;
}

interface LinkProps {
  kind: "link";
  to: string;
  target?: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps {
  kind: "button";
  onClick: () => void;
  type?: "submit" | "button" | "reset";
  to?: never;
  target?: never;
}

type Props = RequiredProps & (LinkProps | ButtonProps);

export const Button = ({
  btnType,
  className,
  text,
  kind,
  to,
  target,
  type,
  onClick,
}: Props) => {
  switch (kind) {
    case "button":
      return (
        <button
          className={`button ${btnType} ${className || ""}`}
          type={type}
          onClick={onClick}>
          {text}
        </button>
      );

    case "link":
      return (
        <a
          href={to}
          role="button"
          className={`button ${btnType}  ${className || ""}`}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}>
          {text}
        </a>
      );

    default:
      return null;
  }
};
