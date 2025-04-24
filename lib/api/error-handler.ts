import { AxiosError } from "axios";

/**
 * Standard API error response structure
 */
export interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
  status?: number;
}

/**
 * Custom API error class with typed information
 */
export class ApiError extends Error {
  public readonly status: number;
  public readonly errors?: Record<string, string[]>;

  constructor(
    message: string,
    status: number,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

/**
 * Extract and format errors from API responses
 *
 * This helper normalizes error handling across the application by:
 * - Converting Axios errors to a consistent ApiError format
 * - Extracting field validation errors when available
 * - Providing appropriate default messages based on status codes
 *
 * @param error - The original error from Axios
 * @returns ApiError with standardized format
 */
export function handleApiError(error: unknown): ApiError {
  // Handle Axios errors
  if (error instanceof AxiosError) {
    const response = error.response;
    const data = response?.data as ApiErrorResponse | undefined;

    // Get status code (default to 500 if unavailable)
    const status = response?.status || 500;

    // Get error message from response or fallback to defaults
    let message = data?.message || error.message;
    if (!message || message === "Network Error") {
      message = getDefaultErrorMessage(status);
    }

    // Return normalized ApiError
    return new ApiError(message, status, data?.errors);
  }

  // Handle generic errors
  if (error instanceof Error) {
    return new ApiError(error.message, 500);
  }

  // Handle unknown errors
  return new ApiError("An unknown error occurred", 500);
}

/**
 * Get default error message based on HTTP status code
 *
 * Provides user-friendly messages for common HTTP error codes
 * when specific messages are not available from the API.
 *
 * @param status - HTTP status code
 * @returns User-friendly error message
 */
function getDefaultErrorMessage(status: number): string {
  switch (status) {
    case 400:
      return "The request was invalid. Please check your input.";
    case 401:
      return "You need to be logged in to perform this action.";
    case 403:
      return "You don't have permission to access this resource.";
    case 404:
      return "The requested resource was not found.";
    case 422:
      return "Validation failed. Please check your input.";
    case 429:
      return "Too many requests. Please try again later.";
    case 500:
      return "An unexpected server error occurred. Please try again later.";
    default:
      return "An unexpected error occurred. Please try again later.";
  }
}
