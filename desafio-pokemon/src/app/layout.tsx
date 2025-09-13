import "./globals.css";
import Header  from "../components/header"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />

        <main className="min-h-screen p-4 md:p-8">
          {children}

        </main>
      </body>
    </html>
  );
}
