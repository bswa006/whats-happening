import axios from "axios";
import { useStore } from "@/store";

/**
 * Base URL for API requests derived from environment variable with fallback
 */
const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

/**
 * Axios instance configuration with default settings
 *
 * This instance is pre-configured with:
 * - Base URL from environment variables
 * - Default timeout
 * - Content-Type header
 * - Request and response interceptors
 */
export const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor to add authentication token
 *
 * This injects the auth token from the store into every request,
 * ensuring authenticated API calls without manual token handling.
 */
axiosInstance.interceptors.request.use((config) => {
  // Get the current auth token from the global store
  const token = useStore.getState().user?.token;

  // Add Authorization header if token exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

/**
 * Response interceptor to handle auth errors
 *
 * This intercepts 401 Unauthorized responses and automatically
 * logs the user out, redirecting to the login page.
 */
axiosInstance.interceptors.response.use(
  // Success handler - pass through response
  (response) => response,
  // Error handler - handle auth errors
  (error) => {
    // Check for 401 Unauthorized response
    if (error.response?.status === 401) {
      // Clear auth state
      useStore.getState().logout();

      // Redirect to login page (client-side only)
      if (typeof window !== "undefined") {
        window.location.href = "/auth/enter-phone";
      }
    }

    // Propagate error to calling code
    return Promise.reject(error);
  }
);
