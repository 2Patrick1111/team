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
            <button onClick={() => window.location.href = 'https://www.kurs.ai-allstars.com'} className="footer-link-button">Kurs-Einblick</button>
            <button onClick={() => window.location.href = 'https://www.preise.ai-allstars.com'} className="footer-link-button">Preise</button>
          </div>
          
          <div className="footer-column">
            <h4>Unternehmen</h4>
            <Link href="/team">Team</Link>
            <button onClick={() => window.location.href = 'https://www.kontakt.ai-allstars.com'} className="footer-link-button">Kontakt</button>
          </div>
          
          <div className="footer-column">
            <h4>Rechtliches</h4>
            <button onClick={() => window.location.href = 'https://ai-allstars.com/datenschutz'} className="footer-link-button">Datenschutz</button>
            <button onClick={() => window.location.href = 'https://ai-allstars.com/impressum'} className="footer-link-button">Impressum</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 AI Allstars. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
