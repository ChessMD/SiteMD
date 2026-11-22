import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";

const primaryBtn =
  "inline-flex w-full items-center justify-center rounded-lg bg-accent px-4 py-3 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover";

const WindowsIcon = (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 5.1 10.4 4v7.1H3V5.1Zm0 13.8 7.4 1v-7H3v6ZM11.3 3.9 21 2.5v8.6h-9.7V3.9Zm0 16.2L21 21.5v-8.6h-9.7v7.2Z" />
  </svg>
);

const AppleIcon = (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.37 1.43c.05 1.02-.36 2.02-1.02 2.74-.69.75-1.78 1.33-2.84 1.25-.07-.98.38-2 1.02-2.68.71-.77 1.92-1.35 2.84-1.31ZM19.5 17.1c-.5 1.15-.74 1.66-1.38 2.68-.9 1.43-2.16 3.2-3.73 3.22-1.4.01-1.75-.9-3.64-.89-1.89.01-2.28.91-3.67.9-1.57-.02-2.77-1.63-3.66-3.05-2.5-3.98-2.77-8.66-1.22-11.14 1.1-1.77 2.84-2.8 4.47-2.8 1.67 0 2.72.9 4.1.9 1.34 0 2.15-.91 4.08-.91 1.46 0 3 .79 4.11 2.16-3.61 1.97-3.03 7.1.44 8.43Z" />
  </svg>
);

const LinuxIcon = (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 3.5c-1 .8-1.3 2.2-1.2 3.6.1 1.3-.4 2.2-1.1 3.3C5.6 12 4.5 13.6 5 15.4c.3 1.1 1.2 1.6 1.4 2.5.2.8-.3 1.6.3 2.2.7.7 2 .6 3.3.6h2c1.3 0 2.6.1 3.3-.6.6-.6.1-1.4.3-2.2.2-.9 1.1-1.4 1.4-2.5.5-1.8-.6-3.4-1.7-5-.7-1.1-1.2-2-1.1-3.3.1-1.4-.2-2.8-1.2-3.6-.9-.7-2.4-.7-3.3 0Z" />
    <path d="M9.5 8.2c0 .4.3.7.6.7M14.5 8.2c0 .4-.3.7-.6.7" />
    <path d="M10.5 11.5c.5.5 2.5.5 3 0" />
  </svg>
);

const platforms = [
  {
    name: "Windows",
    icon: WindowsIcon,
    requirement: "Windows 10/11 (64-bit)",
    buttons: [
      {
        href: "https://apps.microsoft.com/detail/XPFFTX69WQS18M?hl=en-US&gl=US&ocid=pdpshare",
        label: "Installer",
        note: "Recommended",
      },
      {
        href: "https://github.com/ChessMD/ChessMD/releases/download/v1.1/ChessMD_portable.zip",
        label: "Portable",
      },
    ],
  },
  {
    name: "macOS",
    icon: AppleIcon,
    requirement: "macOS 12+ (Intel / Apple Silicon)",
    buttons: [
      {
        href: "https://github.com/ChessMD/ChessMD/releases/download/v1.1/ChessMD.pkg",
        label: "Download",
      },
    ],
  },
  {
    name: "Linux",
    icon: LinuxIcon,
    requirement: "Most modern distributions",
    buttons: [
      {
        href: "https://github.com/ChessMD/ChessMD/releases/download/v1.1/ChessMD.tar.gz",
        label: "x86",
      },
      {
        href: "https://github.com/ChessMD/ChessMD/releases/download/v1.1/ChessMD-aarch64.tar.gz",
        label: "ARM64",
      },
    ],
  },
];

export default function Download() {
  return (
    <div className="min-h-screen">
      <Navigation currentPage="download" />

      <main className="mx-auto max-w-6xl px-6 py-20">
        <section className="text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Download ChessMD
          </h1>
          <p className="mt-4 text-ink-muted">
            Free on Windows, macOS, and Linux. Current version{" "}
            <span className="font-mono text-ink">v1.1</span>.
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/ChessMD/ChessMD/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border-subtle px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              All releases &amp; older versions
            </a>
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex flex-col rounded-xl border border-border-subtle bg-surface p-7 text-center transition-colors hover:border-accent"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-surface-muted text-accent">
                {platform.icon}
              </div>
              <h2 className="font-display mt-5 text-xl font-bold text-ink">
                {platform.name}
              </h2>
              <p className="mt-1 text-sm text-ink-muted">{platform.requirement}</p>
              <div className="mt-6 flex flex-1 flex-col justify-end">
                <div
                  className={`grid gap-3 ${
                    platform.buttons.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {platform.buttons.map((button) => (
                    <DownloadButton
                      key={button.label}
                      href={button.href}
                      className={primaryBtn}
                    >
                      {button.label}
                    </DownloadButton>
                  ))}
                </div>
                {platform.buttons.some((b) => b.note) && (
                  <p className="mt-3 text-xs text-ink-muted">
                    {platform.buttons.find((b) => b.note)?.label} is recommended.
                  </p>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
