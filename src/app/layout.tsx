import { Header } from '@/_common/components/Header';
import './globals.css';
import { Footer } from '@/_common/components/Footer';

export const metadata = {
  title: 'Jongco blog',
  description: '',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="flex justify-center w-full bg-neutral-20">
      <body className="w-full min-h-full">
        <div id="portal" />
        <div className="w-full h-full max-w-3xl mx-auto">
          <div className="flex flex-col justify-between min-h-full">
            <div>
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
