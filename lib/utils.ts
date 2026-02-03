import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, locale: string = 'es'): string {
  return new Intl.NumberFormat(locale === 'es' ? 'es-PE' : 'en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatDate(date: Date, locale: string = 'es'): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-PE' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function formatDateShort(date: Date, locale: string = 'es'): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-PE' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
