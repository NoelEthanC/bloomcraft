import { Hero } from '@/components/public/Hero';
import { ProductHighlights } from '@/components/public/ProductHighlights';
import { About } from '@/components/public/About';
import { ContactForm } from '@/components/public/ContactForm';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <ProductHighlights />
      <About />
      <ContactForm />
    </div>
  );
}