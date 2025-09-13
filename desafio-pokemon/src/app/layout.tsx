import "./globals.css";
import Header  from "../components/header"
import Footer from "@/components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiase`}
      >
        <Header />

        <main className="min-h-screen p-4 md:p-8">
          {children}

        <Footer />

        </main>
      </body>
    </html>
  );
}
