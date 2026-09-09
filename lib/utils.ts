import { clsx, type ClassValue } from "clsx";

/** Une clases condicionales. Convención shadcn. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
