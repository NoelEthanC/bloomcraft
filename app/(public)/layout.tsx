import { Navbar } from '@/components/public/Navbar';
import { Footer } from '@/components/public/Footer';
import { Chatbot } from '@/components/public/Chatbot';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}