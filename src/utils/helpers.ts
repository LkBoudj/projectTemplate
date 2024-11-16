import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function to combine class names
export const cn = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};
