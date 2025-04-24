import { StateCreator } from "zustand";
import { RootState } from "../index";

/**
 * User interface representing authenticated user data
 */
export interface User {
  id: string;
  phoneNumber: string;
  token?: string;
}

/**
 * Credentials interface for authentication
 */
export interface Credentials {
  phoneNumber: string;
  otp?: string;
}

/**
 * Auth slice state and actions
 */
export interface AuthSlice {
  // State
  user: User | null;
  isAuthenticated: boolean;

  // Actions
  login: (credentials: Credentials) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

/**
 * Auth slice creator function
 *
 * This creates a slice of the Zustand store for authentication state,
 * following the recommended pattern from the development document.
 *
 * @param set - Zustand set function
 * @param get - Zustand get function
 * @returns Auth slice implementation
 */
export const createAuthSlice: StateCreator<RootState, [], [], AuthSlice> = (
  set,
  get
) => ({
  // Initial state
  user: null,
  isAuthenticated: false,

  // Actions
  login: async (credentials) => {
    try {
      // In a real implementation, this would call an API
      // Mock implementation for example purposes
      const mockUser: User = {
        id: "user-1",
        phoneNumber: credentials.phoneNumber,
        token: "mock-jwt-token",
      };

      // Update state with authenticated user
      set({
        user: mockUser,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  },

  logout: () => {
    // Clear authentication state
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  updateUser: (userData) => {
    const currentUser = get().user;
    if (!currentUser) return;

    // Update user with new data while preserving existing fields
    set({
      user: {
        ...currentUser,
        ...userData,
      },
    });
  },
});
