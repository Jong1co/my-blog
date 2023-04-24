import { Header } from '@/_common/Header';
import './globals.css';
import { Footer } from '@/_common/Footer';

export const metadata = {
  title: 'Jongco blog',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="flex justify-center w-full bg-neutral-20">
      <body className="w-full max-w-3xl">
        <div className="flex flex-col justify-between min-h-full">
          <div>
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
