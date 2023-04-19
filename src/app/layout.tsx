// import { Header } from "@/_common/Header";
import "./globals.css";
import { Footer } from "@/_common/Footer";

export const metadata = {
  title: "Jonghyun blog",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <header className="bg-gray-500">hello</header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
