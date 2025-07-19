import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.liquid-header')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path: string) => location === path;

  return (
    <header className="liquid-header" id="header">
      <Link href="/" className="header-logo" id="main-logo">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=60" 
          alt="AI Allstars" 
          className="logo-image" 
          title="Zur Startseite"
        />
      </Link>
      
      <nav className="header-nav" id="headerNav">
        <Link 
          href="/team" 
          className={isActiveLink('/team') || isActiveLink('/') ? 'active' : ''}
        >
          Team
        </Link>
        <Link href="/roi-calculator">ROI-Rechner</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
      
      <Link href="/kontakt" className="header-cta">
        AI Pass Beratung
      </Link>
      
      {/* Mobile Star Menu Button */}
      <button 
        className="star-menu-button" 
        id="menuToggle" 
        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <i className="fas fa-star star-icon"></i>
      </button>
      
      {/* Mobile Dropdown Menu */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <Link 
          href="/team" 
          className={`mobile-nav-item ${isActiveLink('/team') || isActiveLink('/') ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Team
        </Link>
        <Link 
          href="/roi-calculator" 
          className="mobile-nav-item"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ROI-Rechner
        </Link>
        <Link 
          href="/kontakt" 
          className="mobile-nav-item"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Kontakt
        </Link>
        <Link 
          href="/kontakt" 
          className="mobile-cta"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          AI Pass Beratung
        </Link>
      </nav>
    </header>
  );
}
