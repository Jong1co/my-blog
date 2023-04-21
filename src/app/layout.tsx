import { Header } from '@/_common/Header';
import './globals.css';
import { Footer } from '@/_common/Footer';

export const metadata = {
  title: 'Jonghyun blog',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="flex justify-center w-full bg-neutral-20">
      <body className="relative w-full max-w-3xl min-h-screen ">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
