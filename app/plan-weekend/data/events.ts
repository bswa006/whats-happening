/**
 * Types for event data
 */
export interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  distance: string;
  description: string;
  price: string;
  image: string;
}

export interface EventSection {
  title: string;
  date: string;
  events: EventData[];
}

/**
 * Event data for the Plan Weekend page
 */
export const weekendEvents: EventSection[] = [
  {
    title: "Events",
    date: "Friday, March 25",
    events: [
      {
        title: "Bangalore Through the Centuries",
        date: "4th Feb",
        time: "6:30 PM",
        location: "MG Road",
        distance: "See Distance",
        description:
          "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
        price: "₹500",
        image: "/static/images/frame-11587-2.png",
      },
      {
        title: "Bangalore Through the Centuries",
        date: "4th Feb",
        time: "6:30 PM",
        location: "MG Road",
        distance: "See Distance",
        description:
          "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
        price: "₹500",
        image: "/static/images/frame-11587-4.png",
      },
      {
        title: "Bangalore Through the Centuries",
        date: "4th Feb",
        time: "6:30 PM",
        location: "MG Road",
        distance: "See Distance",
        description:
          "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
        price: "Sold Out",
        image: "/static/images/frame-11587-2.png",
      },
      {
        title: "Bangalore Through the Centuries",
        date: "4th Feb",
        time: "6:30 PM",
        location: "MG Road",
        distance: "See Distance",
        description:
          "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
        price: "₹500",
        image: "/static/images/frame-11587-2.png",
      },
      {
        title: "Bangalore Through the Centuries",
        date: "4th Feb",
        time: "6:30 PM",
        location: "MG Road",
        distance: "See Distance",
        description:
          "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
        price: "Free",
        image: "/static/images/frame-11587-2.png",
      },
    ],
  },
];
