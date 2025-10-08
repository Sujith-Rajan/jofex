import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-industrial.jpg';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-4">
            <span className="text-primary-foreground font-semibold">Leading Industrial Solutions Since 1969</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Excellence in Manufacturing & Innovation
          </h1>

          <p className="text-xl md:text-2xl  text-primary-foreground  max-w-3xl mx-auto">
            Global supplier of high-quality industrial materials and solutions, serving customers worldwide with over 50 years of expertise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 px-8 py-6 text-lg backdrop-blur-sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};