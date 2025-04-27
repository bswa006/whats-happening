"use client";

/**
 * Props for the HeaderBar component
 */
export interface HeaderBarProps {
  /**
   * Color theme for the status bar (affects text/icon colors)
   * @default "light"
   */
  theme?: "light" | "dark";

  /**
   * Additional class name for the container
   */
  className?: string;

  /**
   * Whether to show the back button
   * @default true
   */
  showBackButton?: boolean;

  /**
   * OnClick handler for the back button
   */
  onBackClick?: () => void;
}

/**
 * Shared header bar component used across pages
 * @param {HeaderBarProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function HeaderBar({
  className = "",
  showBackButton = true,
  onBackClick,
}: HeaderBarProps): JSX.Element {
  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      // Default back behavior (browser history)
      window.history.back();
    }
  };

  return (
    <>
      <div
        className={`fixed w-full max-w-md mx-auto z-50 top-0 left-0 right-0 ${className}`}
      >
        {showBackButton && (
          <div className="inline-flex items-center gap-1 absolute top-[62px] left-[23px] z-50">
            <button
              className="inline-flex items-center justify-center gap-2.5 px-3.5 py-[11px] bg-colors-color-general-bg-subtle border-2 border-solid border-colors-color-general-border-default cursor-pointer"
              onClick={handleBackClick}
              aria-label="Back"
            >
              <img
                className="w-2 h-3.5"
                alt="Back"
                src="/static/images/vector.svg"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
