"use client";

import { useStore } from "@/store";
import { Credentials, User } from "@/store/slices/auth-slice";

/**
 * Custom hook for accessing authentication state and actions
 *
 * This hook provides a convenient interface for working with auth-related
 * functionality throughout the application. It selects only the auth-related
 * portions of the store to prevent unnecessary re-renders.
 *
 * @returns Object containing auth state and actions
 *
 * @example
 * // Using the auth hook in a component
 * const { user, isAuthenticated, login, logout } = useAuth();
 *
 * // Check if user is authenticated
 * if (!isAuthenticated) {
 *   return <LoginForm onSubmit={login} />;
 * }
 *
 * // Display user info
 * return <div>Welcome, {user.phoneNumber}</div>;
 */
export function useAuth() {
  const user = useStore((state) => state.user);
  const isAuthenticated = useStore((state) => state.isAuthenticated);
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);
  const updateUser = useStore((state) => state.updateUser);

  return {
    user,
    isAuthenticated,
    login,
    logout,
    updateUser,
  };
}
