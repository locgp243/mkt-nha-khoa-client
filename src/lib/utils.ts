import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// =================================================================
// File: lib/utils/api.utils.ts
// Tạo file này trong dự án của bạn
// =================================================================

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

/**
 * Utility function to safely extract data from API response
 */
export function extractApiData<T>(response: unknown): T | null {
  if (!response || typeof response !== 'object') {
    return null;
  }

  const apiResponse = response as ApiResponse<T>;
  return apiResponse.data || null;
}

/**
 * Type guard to check if response is valid API response
 */
export function isValidApiResponse<T>(response: unknown): response is ApiResponse<T> {
  return (
    response !== null &&
    typeof response === 'object' &&
    'data' in response
  );
}