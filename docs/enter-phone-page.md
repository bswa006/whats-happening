# Enter Phone Page Documentation

## Overview

The Enter Phone page is the first step in the user authentication flow. It collects the user's phone number for OTP verification and provides a visually appealing introduction to the application.

## Implementation Details

### UI Components

- **Background Image**: Full-screen food illustration that serves as a visually engaging backdrop
- **Content Panel**: White rounded panel at the bottom with the main form content
- **Phone Input**: Custom input field with country code prefix (+91) and 10-digit number field
- **Next Button**: Primary action button with arrow icon and shadow effect

### Key Features

1. **Pixel-Perfect Design**: Implemented exactly according to the Figma design specifications
2. **Input Validation**: Only allows numeric input and limits to 10 digits for Indian phone numbers
3. **Responsive Layout**: Adapts to different screen sizes while maintaining the design integrity
4. **Accessibility**: Includes proper aria attributes and semantic HTML
5. **Internationalization Ready**: Structured to support multiple languages

### Code Structure

```
app/auth/enter-phone/
  └── page.tsx         # Main page component

components/
  ├── auth/
  │   └── phone-input.tsx  # Custom phone input with country code
  └── ui/
      ├── button/      # Reusable button component
      │   └── index.tsx
      └── input/       # Base input component
          └── index.tsx
```

### Component Hierarchy

```
EnterPhonePage
  ├── Background Image
  └── Content Panel
      ├── Header Section
      │   ├── Title ("Get Started")
      │   └── Subtitle ("Find the best...")
      ├── Phone Input Section
      │   ├── Label ("Enter your Phone Number")
      │   └── PhoneInput (Custom Component)
      │       ├── Country Code Prefix
      │       └── Input Field
      └── Footer Section
          ├── Terms Text
          └── Next Button
```

## Design Decisions

1. **Country Code Implementation**: The country code is implemented as a non-editable prefix to simplify the input process while making it clear this is for Indian phone numbers.

2. **Input Validation**: Validation happens on every keystroke to provide immediate feedback rather than waiting for form submission.

3. **Button Enablement**: The "Next" button is disabled until a valid 10-digit number is entered to prevent submission of incomplete data.

4. **Shadow Effect**: Implemented the custom shadow effect from Figma using Tailwind's box-shadow utilities.

5. **Typography**: Used the exact font families, sizes, and weights from the Figma design to ensure visual consistency.

## Accessibility Considerations

- Proper contrast ratios between text and background
- Keyboard navigation support
- Screen reader friendly with appropriate ARIA attributes
- Clear visual feedback for input states (focus, disabled)
- Helpful error messages and input constraints

## Future Enhancements

- Add phone number format validation (beyond just length)
- Implement actual API integration for sending OTP
- Add animation for transition to next page
- Support for multiple country codes
