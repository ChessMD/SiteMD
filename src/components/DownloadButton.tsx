"use client";

import Link from "next/link";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

export default function DownloadButton({ href, children, className }: DownloadButtonProps) {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank');
    }
    window.location.href = '/download';
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
