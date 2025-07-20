import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import logoImage from "@/assets/allstars-logo-white_1752933496612.png";
import starImage from "@/assets/star-white_1752933496613.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 50) {
        header?.classList.add('shrunk');
      } else {
        header?.classList.remove('shrunk');
      }
      
      lastScrollTop = scrollTop;
    };

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          src={logoImage} 
          alt="AI Allstars" 
          className="logo-image" 
          title="Zur Startseite"
        />
      </Link>
      
      <nav className="header-nav" id="headerNav">
        <Link 
          href="/" 
          className={isActiveLink('/') ? 'active' : ''}
        >
          Home
        </Link>
        <Link href="/preise">Preise</Link>
        <Link 
          href="/team" 
          className={isActiveLink('/team') ? 'active' : ''}
        >
          Team
        </Link>
        <Link href="/kurs">Kurs</Link>
        <Link href="/kontakt">Kontakt</Link>
      </nav>
      
      <Link href="/kontakt" className="header-cta">
        AI Pass Beratung
      </Link>
      
      {/* Mobile Star Menu Button */}
      <button 
        className={`star-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
        id="menuToggle" 
        aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <img src={starImage} alt="Menu" className="star-icon" />
      </button>
      
      {/* Mobile Dropdown Menu */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`} id="mobileNav">
        <Link 
          href="/" 
          className={`mobile-nav-item ${isActiveLink('/') ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          href="/preise" 
          className="mobile-nav-item"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Preise
        </Link>
        <Link 
          href="/team" 
          className={`mobile-nav-item ${isActiveLink('/team') ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Team
        </Link>
        <Link 
          href="/kurs" 
          className="mobile-nav-item"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Kurs
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
