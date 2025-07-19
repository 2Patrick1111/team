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
            <Link href="/roi-calculator">KI-Potenzialanalyse</Link>
            <Link href="/#features">AI Pass Details</Link>
            <Link href="/appointment">Strategiegespräch</Link>
          </div>
          
          <div className="footer-column">
            <h4>Unternehmen</h4>
            <Link href="/team#team-slider">Über uns</Link>
            <Link href="/team">Team</Link>
            <Link href="/#signup">Kontakt</Link>
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
