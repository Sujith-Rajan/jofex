import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import jofexLogo from '@/assets/jofex-logo.jpg';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Image src={jofexLogo} alt="JOFEX since 1973" className="h-12 w-auto" />
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Leading the industry with excellence and innovation since 1973.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#values" className="hover:text-primary transition-colors">Our Values</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Chemical Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Industrial Equipment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Advanced Materials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Specialty Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Industrial Estate, Sector 12</li>
              <li>Manufacturing Hub, India</li>
              <li className="pt-2">
                <a href="tel:+911234567890" className="hover:text-primary transition-colors">+91-123-4567890</a>
              </li>
              <li>
                <a href="mailto:info@company.com" className="hover:text-primary transition-colors">info@company.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} JOFEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};