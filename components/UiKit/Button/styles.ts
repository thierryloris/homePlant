import { cva } from "class-variance-authority";

export const ButtonStyles = cva([""], {
  variants: {
    color: {
      primary: "bg-green-900 text-white",
      secondary: "bg-orange-950 text-white",
      transparent: "bg-transparent text-blue",
      transparentgrey: "bg-transparent text-grey",
      transparentwhite: "bg-transparent text-white",
    },
    align: {
      mauto: "m-auto",
      m0: "m-0",
    },
    variant: {
      contained: "rounded px-6 py-2",
      outlined: "rounded border border-blue px-6 py-2",
      shadow: "rounded shadow-md px-6 py-2",
      right: "rounded px-6 py-2",
      text: "rounded-none p-0",
    },
    decoration: {
      icon: "flex gap-3 items-center",
    },
    fit: {
      none: "",
      full: "w-full",
      content: "w-fit",
    },
    size: {
      small: "text-md",
      medium: "text-paragraph",
      large: "text-lg",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "contained",
      class: "hover:bg-white border border-green-900 hover:text-green-900",
    },
    {
      color: "secondary",
      variant: "contained",
      class: "hover:bg-white border border-orange-950 hover:text-orange-950",
    },
    {
      color: "transparent",
      variant: "text",
      class: "",
    },
  ],
});
