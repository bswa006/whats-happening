"use client";

import React, { useEffect } from "react";

/**
 * Client component to handle client-side only functionality
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {React.ReactNode} Client layout wrapper
 */
export function ClientLayout({ children }: { children: React.ReactNode }) {
  // Suppress hydration warnings from browser extensions
  useEffect(() => {
    // This runs only on client, after hydration
    const originalError = console.error;
    console.error = (...args) => {
      const errorMessage = typeof args[0] === "string" ? args[0] : "";

      // Check for hydration errors related to browser extensions
      if (
        errorMessage.includes("Extra attributes from the server") ||
        errorMessage.includes("Hydration failed because") ||
        errorMessage.includes("There was an error while hydrating")
      ) {
        // List of known browser extension attributes that cause hydration issues
        const knownExtensionAttributes = [
          "cz-shortcut-listen",
          "data-darkreader",
          "data-climate",
          "data-grammarly",
          "data-extension",
        ];

        // Check if the error is related to a known extension
        if (
          knownExtensionAttributes.some((attr) => errorMessage.includes(attr))
        ) {
          return; // Suppress the warning
        }
      }

      // Pass through all other errors
      originalError.apply(console, args);
    };

    // Create MutationObserver to remove browser extension attributes
    // This is a more proactive approach to prevent hydration warnings
    const removeExtensionAttributes = () => {
      if (typeof document !== "undefined") {
        const body = document.body;
        if (body) {
          // List of attributes to remove
          const attributesToRemove = [
            "cz-shortcut-listen",
            "data-darkreader",
            "data-climate",
            "data-grammarly",
          ];

          attributesToRemove.forEach((attr) => {
            if (body.hasAttribute(attr)) {
              body.removeAttribute(attr);
            }
          });
        }
      }
    };

    // Run once immediately after hydration
    removeExtensionAttributes();

    // Set up observer to catch any future attribute additions
    const observer = new MutationObserver((mutations) => {
      removeExtensionAttributes();
    });

    // Start observing the body for attribute changes
    if (typeof document !== "undefined") {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: [
          "cz-shortcut-listen",
          "data-darkreader",
          "data-climate",
          "data-grammarly",
        ],
      });
    }

    return () => {
      console.error = originalError;
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return <>{children}</>;
}
