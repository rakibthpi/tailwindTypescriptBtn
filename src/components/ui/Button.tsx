// `bg-green-500 px-6 py-2 rounded-md ${className} ${
//   veriant === "outline"
//     ? "border border-purple-300 bg-opacity-10"
//     : ""

import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TRef = HTMLButtonElement;

type TVeriant = "primary" | "secondary" | "rakib" | undefined;
type TButtonProps = {
  veriant?: TVeriant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonProps;

const Button = forwardRef<TRef, TButton>(
  ({ className, veriant, ...rest }, ref) => {
    const btnSwitch = (veriant: TVeriant) => {
      switch (veriant) {
        case "primary":
          return "btn-primary";
        case "secondary":
          return "btn-secondary";
        default:
          return "btn-rakib";
      }
    };
    return (
      <div>
        <button
          {...rest}
          ref={ref}
          className={cn(btnSwitch(veriant), className)}
        >
          Button
        </button>
      </div>
    );
  }
);

export default Button;
