import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Visual Law',
  description: 'Visualize informações legais de forma clara e interativa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
