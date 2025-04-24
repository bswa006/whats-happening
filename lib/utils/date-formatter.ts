/**
 * Formats a date string based on the provided locale and options
 *
 * @param dateString - ISO date string to format
 * @param locale - Locale for formatting (defaults to 'en-US')
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  locale = "en-US",
  options?: Intl.DateTimeFormatOptions
): string => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  };

  try {
    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    return new Intl.DateTimeFormat(locale, defaultOptions).format(date);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date";
  }
};

/**
 * Formats a date as a relative time string (e.g., "2 days ago")
 *
 * @param dateString - ISO date string to format
 * @param locale - Locale for formatting (defaults to 'en-US')
 * @returns Relative time string
 */
export const formatRelativeTime = (
  dateString: string,
  locale = "en-US"
): string => {
  try {
    const date = new Date(dateString);

    // Check if date is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSecs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // Format based on time difference
    if (diffInSecs < 60) {
      return "just now";
    } else if (diffInMins < 60) {
      return `${diffInMins} minute${diffInMins === 1 ? "" : "s"} ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
    } else {
      // Fall back to standard date format for older dates
      return formatDate(dateString, locale);
    }
  } catch (error) {
    console.error("Error formatting relative time:", error);
    return "Invalid date";
  }
};
