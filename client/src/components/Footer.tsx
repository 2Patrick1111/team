import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=60" 
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
