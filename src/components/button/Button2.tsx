import { ReactNode } from "react";

interface RequiredProps {
  btnType?: "primary" | "secondary" | "transaparent";
  className?: string;
  text: ReactNode;
  as?: React.ElementType;
}

interface LinkProps {
  to: string;
  target?: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps {
  onClick: () => void;
  type?: "submit" | "button" | "reset";
  to?: never;
  target?: never;
}

type Props = RequiredProps & (LinkProps | ButtonProps);

export const Button2 = ({
  btnType,
  className,
  text,
  as = "button",
  to,
  target,
  type,
  onClick,
}: Props) => {
  const As = as;

  return (
    <As
      className={`button ${btnType} ${className || ""}`}
      type={type}
      onClick={onClick}
      href={to}
      role="button"
      target={target}
      rel={target ? "noopener noreferrer" : undefined}>
      {text}
    </As>
  );
};
