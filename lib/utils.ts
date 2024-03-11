import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Showing Mateo smth cool

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
