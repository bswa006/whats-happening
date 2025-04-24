import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createAuthSlice, AuthSlice } from "./slices/auth-slice";

/**
 * Root state type combining all slice types
 */
export interface RootState extends AuthSlice {
  // Add other slices as needed
}

/**
 * Zustand store with persistence
 *
 * This creates the main store by combining all slices and
 * adding persistence middleware to maintain state across page refreshes.
 * State is stored in localStorage with the specified key.
 */
export const useStore = create<RootState>()(
  persist(
    (...args) => ({
      ...createAuthSlice(...args),
      // Add other slices here
    }),
    {
      name: "app-storage",
      // Only persist specific parts of the state to prevent bloat
      partialize: (state) => ({
        user: state.user,
      }),
    }
  )
);
