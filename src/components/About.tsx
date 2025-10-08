import { Building2, Globe, Users, Award } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Building2, value: '50+', label: 'Years Experience' },
    { icon: Globe, value: '75+', label: 'Countries Served' },
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Award, value: '100+', label: 'Industry Awards' },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">About Our Company</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Leading the Industry for Over Five Decades
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 1969, we have established ourselves as a global leader in industrial materials and manufacturing solutions. Our commitment to quality, innovation, and customer satisfaction has enabled us to serve clients across the globe.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in supplying high-quality industrial materials, from advanced chemical solutions to precision-engineered products. Our state-of-the-art facilities and experienced team ensure that we deliver excellence in every project.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be a world-class global solution provider with a vibrant and innovative culture, delivering exceptional value to our customers while maintaining the highest standards of quality and sustainability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};