export interface ButtonProps {
  label: string;
  color?:
    | "primary"
    | "secondary"
    | "transparent"
    | "transparentgrey"
    | "transparentwhite";
  font?: "regular" | "bold" | "light";
  variant?: "contained" | "outlined" | "shadow" | "right" | "text";
  align?: "mauto" | "m0";
  decoration?: "icon";
  link?: string;
  isTextOnLeft?: Boolean;
  classNames?: string;
  fit?: "none" | "full" | "content";
  size?: "small" | "medium" | "large";
  onClick?: (payload: MouseEvent) => void;
}
