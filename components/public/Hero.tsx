import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Beautiful 
              <span className="text-green-600"> Flowers</span>
              <br />
              for Every
              <span className="text-blue-600"> Occasion</span>
            </h1>
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Discover our premium collection of fresh flowers and plants. 
              Expert care, timely delivery, and unmatched quality for all your special moments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                View Catalog
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-200 to-blue-200 rounded-full flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop" 
                alt="Beautiful flower arrangement" 
                className="w-4/5 h-4/5 object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}