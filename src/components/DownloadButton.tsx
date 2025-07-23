"use client";


interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

export default function DownloadButton({ href, children, className }: DownloadButtonProps) {
  const handleClick = () => {
    // this is so that i can make the download button run the download, and then redirect to the download page
    if (href) window.open(href, '_blank');
    window.location.href = '/download';
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
