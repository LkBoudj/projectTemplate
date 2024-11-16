import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
export const buttonVariant = cva(
  "rounded-lg inline-flex items-center   text-sm  focus:outline-none transition-all duration-300",
  {
    variants: {
      intent: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600",
          "focus:ring-4 focus:ring-blue-300",
          "dark:bg-blue-600",
          "dark:hover:bg-blue-700",
          "dark:focus:ring-blue-800",
        ],
        alternative: [
          "bg-white",
          "text-gray-900",
          "border border-gray-200",
          "hover:bg-gray-100",
          "hover:text-blue-700",
          "focus:ring-4 focus:ring-gray-100",
          "dark:bg-gray-800",
          "dark:text-gray-400",
          "dark:border-gray-600",
          "dark:hover:text-white",
          "dark:hover:bg-gray-700",
          "dark:focus:ring-gray-700",
        ],
        dark: [
          "bg-gray-800",
          "text-white",
          "hover:bg-gray-900",
          "focus:ring-4 focus:ring-gray-300",
          "dark:bg-gray-800",
          "dark:hover:bg-gray-700",
          "dark:focus:ring-gray-700",
          "dark:border-gray-700",
        ],
        light: [
          "bg-white",
          "text-gray-900",
          "border border-gray-300",
          "hover:bg-gray-100",
          "focus:ring-4 focus:ring-gray-100",
          "dark:bg-gray-800",
          "dark:text-white",
          "dark:border-gray-600",
          "dark:hover:bg-gray-700",
          "dark:focus:ring-gray-700",
        ],
        green: [
          "bg-green-500",
          "text-white",
          "hover:bg-green-600",
          "focus:ring-4 focus:ring-green-300",
          "dark:bg-green-600",
          "dark:hover:bg-green-700",
          "dark:focus:ring-green-800",
        ],
        red: [
          "bg-red-500",
          "text-white",
          "hover:bg-red-600",
          "focus:ring-4 focus:ring-red-300",
          "dark:bg-red-600",
          "dark:hover:bg-red-700",
          "dark:focus:ring-red-900",
        ],
        yellow: [
          "bg-yellow-400",
          "text-white",
          "hover:bg-yellow-500",
          "focus:ring-4 focus:ring-yellow-300",
          "dark:bg-yellow-500",
          "dark:hover:bg-yellow-600",
          "dark:focus:ring-yellow-800",
        ],
        purple: [
          "bg-purple-500",
          "text-white",
          "hover:bg-purple-600",
          "focus:ring-4 focus:ring-purple-300",
          "dark:bg-purple-600",
          "dark:hover:bg-purple-700",
          "dark:focus:ring-purple-800",
        ],
        gradient: [
          "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
          "text-white",
          "hover:from-blue-600 hover:via-purple-600 hover:to-pink-600",
          "focus:ring-4 focus:ring-purple-300",
          "dark:focus:ring-purple-800",
        ],
        default: [""],
      },
      size: {
        icon: ["p-1"],
        small: ["text-sm", "py-1", "px-3"],
        medium: ["text-md", "py-2", "px-4"],
        large: ["text-lg", "py-3", "px-6"],
        extraLarge: ["text-xl", "py-4", "px-8"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  label?: string;
  isLoading?: boolean;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}

export interface BtnIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  isLoading?: boolean;
  intent?:
    | "primary"
    | "alternative"
    | "dark"
    | "light"
    | "green"
    | "red"
    | "yellow"
    | "purple"
    | "gradient"
    | "default";
}
