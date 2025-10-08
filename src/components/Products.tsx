import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import product1 from '@/assets/products-1.jpg';
import product2 from '@/assets/products-2.jpg';
import product3 from '@/assets/products-3.jpg';
import Image from 'next/image';

export const Products = () => {
  const products = [
    {
      image: product1,
      title: 'Chemical Solutions',
      description: 'High-quality pigments, dyes, and specialty chemicals for diverse industrial applications including coatings, plastics, and printing.',
    },
    {
      image: product2,
      title: 'Industrial Equipment',
      description: 'Precision-engineered machinery and equipment designed for optimal performance in demanding manufacturing environments.',
    },
    {
      image: product3,
      title: 'Advanced Materials',
      description: 'Innovative materials and compounds developed through cutting-edge research for specialized industrial requirements.',
    },
  ];

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry-Leading Solutions
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our comprehensive range of products designed to meet the most demanding industrial requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 border-0"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};