export type NavKey = "home" | "guide" | "download" | "about";

export const navLinks = [
  { href: "/guide", label: "Guide", key: "guide" },
  { href: "/download", label: "Download", key: "download" },
  { href: "/about", label: "About", key: "about" },
] as const;
