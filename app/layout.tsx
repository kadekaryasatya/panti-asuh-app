"use client";
import "./globals.css";
import "./data-tables-css.css";
import "./satoshi.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/images/logo/panti-logo.png" />
      </head>
      <body suppressHydrationWarning={true}>
        <main>
          <div className="">{children}</div>
        </main>
      </body>
    </html>
  );
}
