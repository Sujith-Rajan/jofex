import { Heart, Target, Lightbulb, Shield } from 'lucide-react';

export const Values = () => {
  const values = [
    {
      icon: Heart,
      title: 'Serve',
      description: 'We take full ownership to serve our customers with agility and dedication, ensuring their success is our priority.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services that exceed industry standards and customer expectations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously investing in research and development to bring cutting-edge solutions to market and stay ahead of industry trends.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Operating with transparency, ethical practices, and unwavering commitment to doing what is right for our stakeholders.',
    },
  ];

  return (
    <section id="values" className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-secondary-foreground/10 rounded-full mb-4">
            <span className="text-secondary-foreground font-semibold">Our Core Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-xl text-secondary-foreground/80">
            Our values are the foundation of everything we do, guiding our decisions and shaping our culture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-secondary-foreground/10 transition-all duration-300 hover:-translate-y-2 border border-secondary-foreground/10"
              >
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-secondary-foreground/80 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};