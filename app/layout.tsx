import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vorleak Som - Backend Developer',
  description: 'Portfolio of Vorleak Som, Backend Developer specializing in scalable architectures.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased text-[#111111] bg-[#F7F7F7] selection:bg-[#a3e635] selection:text-black">
        {children}
      </body>
    </html>
  );
}
