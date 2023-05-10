import { Header } from '@/_common/components/Header';
import { Footer } from '@/_common/components/Footer';
import './globals.css';

export const metadata = {
  title: {
    default: 'Jonghyun',
    template: 'Jonghyun | %s',
  },
  description: '프론트엔드 개발자의 기록용 블로그',
  icons: {
    icon: '/favicon.ico',
  },
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
