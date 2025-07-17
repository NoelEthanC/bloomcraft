import { Card, CardContent } from '@/components/ui/card';
import { Award, Truck, Heart, Leaf } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest flowers and plants, carefully selected for freshness and beauty.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery available for orders placed before 2 PM.'
    },
    {
      icon: Heart,
      title: 'Expert Care',
      description: 'Our skilled florists ensure every arrangement is perfect.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable practices and eco-friendly packaging for a greener future.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Choose BloomCraft?
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            We're passionate about bringing nature's beauty to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}