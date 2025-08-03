import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-text-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">SK</span>
            </div>
            <span className="text-xl font-bold text-text-primary">
              SHANE<span className="text-brand-gold">KINKENNON</span>
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors font-medium">
              About
            </a>
            <a href="#blog" className="text-text-secondary hover:text-text-primary transition-colors font-medium">
              Blog
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button variant="brand" size="lg" className="px-6">
            Meet with Shane
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;