import { Link } from "wouter";
import logoImage from "@/assets/allstars-logo-white_1752933496612.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img 
              src={logoImage} 
              alt="AI Allstars" 
              className="footer-logo-image"
            />
          </div>
          <p>Ihr Partner für erfolgreiche KI-Transformation</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Services</h4>
            <a href="https://kurs.ai-allstars.com">Kurs-Einblick</a>
            <a href="https://preise.ai-allstars.com">Preise</a>
          </div>
          
          <div className="footer-column">
            <h4>Unternehmen</h4>
            <Link href="/team">Team</Link>
            <a href="https://kontakt.ai-allstars.com">Kontakt</a>
          </div>
          
          <div className="footer-column">
            <h4>Rechtliches</h4>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 AI Allstars. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
