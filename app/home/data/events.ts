/**
 * Home page event data
 * Contains editorial picks and event card information
 */

export interface EventData {
  id: string;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  distance: string;
  description: string;
  price: string;
  pricing: "free" | "ticketed" | "sold-out";
}

export interface TabData {
  id: string;
  label: string;
  isActive: boolean;
}

export interface AccessPassData {
  title: string;
  date: string;
  image: string;
  badgeText: string;
}

export const tabOptions: TabData[] = [
  { id: "today", label: "Today", isActive: true },
  { id: "tomorrow", label: "Tomorrow", isActive: false },
  { id: "later", label: "Later", isActive: false },
];

export const accessPassData: AccessPassData = {
  title: "The History of Money",
  date: "12 APR 2024",
  image: "/static/images/frame-11863.png",
  badgeText: "PRIORITY ACCESS",
};

export const eventCards: EventData[] = [
  {
    id: "1",
    image: "/static/images/frame-11587-2.png",
    title: "Bangalore Through the Centuries",
    date: "4th Feb",
    time: "6:30 PM",
    location: "MG Road",
    distance: "2km Away",
    description:
      "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
    price: "₹500",
    pricing: "ticketed",
  },
  {
    id: "2",
    image: "/static/images/frame-11587-4.png",
    title: "Bangalore Through the Centuries",
    date: "4th Feb",
    time: "6:30 PM",
    location: "MG Road",
    distance: "2km Away",
    description:
      "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
    price: "₹500",
    pricing: "free",
  },
  {
    id: "3",
    image: "/static/images/image-1.png",
    title: "Bangalore Through the Centuries",
    date: "4th Feb",
    time: "6:30 PM",
    location: "MG Road",
    distance: "2km Away",
    description:
      "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
    price: "₹500",
    pricing: "sold-out",
  },
  {
    id: "4",
    image: "/static/images/frame-11587-4.png",
    title: "Bangalore Through the Centuries",
    date: "4th Feb",
    time: "6:30 PM",
    location: "MG Road",
    distance: "2km Away",
    description:
      "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
    price: "₹500",
    pricing: "ticketed",
  },
  {
    id: "5",
    image: "/static/images/frame-11587-2.png",
    title: "Bangalore Through the Centuries",
    date: "4th Feb",
    time: "6:30 PM",
    location: "MG Road",
    distance: "2km Away",
    description:
      "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
    price: "₹500",
    pricing: "ticketed",
  },
  {
    id: "6",
    image: "/static/images/frame-11587-4.png",
    title: "Bangalore Through the Centuries",
    date: "4th Feb",
    time: "6:30 PM",
    location: "MG Road",
    distance: "2km Away",
    description:
      "If you're interested in a talk on neutrinos, proton decay & the mysterious 'Kolar events', Science Gallery is hosting.",
    price: "Free",
    pricing: "free",
  },
];
