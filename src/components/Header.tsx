"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import jofexLogo from '@/assets/jofex-logo.jpg';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91-123-4567890</span>
            </a>
            <a href="mailto:info@company.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@company.com</span>
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image src={jofexLogo} alt="JOFEX since 1973" className="h-16 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About Us</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
            <a href="#values" className="text-foreground hover:text-primary transition-colors font-medium">Our Values</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="lg:hidden">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium">About Us</a>
              <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
              <a href="#values" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium">Our Values</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};