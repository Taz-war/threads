import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// generated by shadcn
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// created by chatgpt
export function isBase64Image(imageData: string): boolean {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

// created by chatgpt
export function formatDateString(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${time} - ${formattedDate}`;
}

// created by chatgpt
export function formatThreadCount(count: number): string {
  if (count === 0) {
    return "No Threads";
  } else {
    const threadCount = count.toString().padStart(2, "0");
    const threadWord = count === 1 ? "Thread" : "Threads";
    return `${threadCount} ${threadWord}`;
  }
}
