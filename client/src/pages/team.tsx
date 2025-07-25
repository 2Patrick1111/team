import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import patrickImage from "@/assets/profilbild_1752935146997.png";
import antonioImage from "@/assets/Antonio_1752935777029.png";
import jennyImage from "@/assets/Jenny_1752936012533.png";
import antonImage from "@/assets/anton_1752936501027.png";
import markoImage from "@/assets/Marko_1752937178012.png";
import broschuerePDF from "@/assets/AI_Pass_Broschuere.pdf";

const teamMembers = [
  {
    name: "Patrick Thomas",
    role: "CEO & KI-Experte",
    description: "Mit umfassender KI-Expertise und langjähriger Erfahrung in Automatisierung entwickelt Patrick innovative KI-Lösungen, um Unternehmen nachhaltig zu transformieren und interne Prozesse zu optimieren.",
    image: patrickImage,
    social: {
      linkedin: "https://www.linkedin.com/in/patrick-thomas-38ab512ba/",
      email: "patrick.thomas@ai-allstars.com"
    }
  },
  {
    name: "Antonio Eichler",
    role: "CEO & KI-Strategieexperte",
    description: "Antonio verbindet fundierte KI-Kenntnisse mit exzellenter Kommunikationsstärke und unterstützt Unternehmen dabei, strategisch und strukturell das volle Potenzial künstlicher Intelligenz auszuschöpfen.",
    image: antonioImage,
    social: {
      linkedin: "https://www.linkedin.com/in/antonio-eichler-841296300/",
      email: "antonio.eichler@ai-allstars.com"
    }
  },
  {
    name: "Jenny Thomas",
    role: "Controlling und Antragswesen",
    description: "Mit ihrer Expertise im Controlling und der Automatisierung von Antragsprozessen sorgt Jenny für reibungslose Abläufe und ist die Spezialistin für effizientes Antragswesen in unserem Team.",
    image: jennyImage,
    social: {
      linkedin: "https://www.linkedin.com/in/jenny-thomas-31a199352/",
      email: "jenny.thomas@ai-allstars.com"
    }
  },
  {
    name: "Anton Trommer",
    role: "KI Experte und Systems Strategist",
    description: "Anton bringt seine Stärken in der KI- und Systementwicklung sowie der Automatisierung ein, um Unternehmen bei der Effizienzsteigerung wirkungsvoll zu unterstützen.",
    image: antonImage,
    social: {
      linkedin: "https://www.linkedin.com/in/anton-trommer-b6997028a/",
      email: "anton.trommer@ai-allstars.com"
    }
  },
  {
    name: "Dr. Marko Müller",
    role: "Head of Growth & Customer Experience",
    description: "Als Kommunikationsspezialist stärkt Marko sowohl interne Prozesse als auch die externe Kommunikation und ist damit ein zentraler Bestandteil unseres Teams.",
    image: markoImage,
    social: {
      linkedin: "https://www.linkedin.com/in/markopreneur/",
      email: "marko@ai-allstars.com"
    }
  }
];

export default function Team() {
  useEffect(() => {
    // Header scroll effect
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (header) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          header.style.transform = 'translateY(-100%)';
        } else {
          header.style.transform = 'translateY(0)';
        }
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div>
      {/* Starry Background */}
      <div className="starry-bg"></div>
      <Header />
      {/* Hauptinhalt */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Unser <span className="gradient-text">Allstars Team</span></h1>
            <p className="hero-subtitle">Die AI Allstars für KI-Transformation</p>
            <p className="hero-description">
              Lernen Sie die Köpfe hinter AI Allstars kennen - ein Team aus erfahrenen KI-Spezialisten, Strategieberatern und Technologie-Experten, die Ihr Unternehmen erfolgreich in die Zukunft führen.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </section>

        {/* CTA Grid Section */}
        <section className="cta-grid-section">
          <div className="cta-grid">
            {/* CTA 1: Broschüre */}
            <div className="cta-card">
              <div className="cta-icon">📄</div>
              <h3 className="cta-title">Kostenlose Broschüre</h3>
              <p className="cta-description">Erhalten Sie alle Details zum 5-Wochen AI-PASS Programm als PDF</p>
              <a href={broschuerePDF} download="AI_Pass_Broschuere.pdf" className="cta-button-card">
                Broschüre herunterladen
              </a>
            </div>

            {/* CTA 2: Kurseinblick */}
            <div className="cta-card">
              <div className="cta-icon">🎓</div>
              <h3 className="cta-title">Kurseinblick</h3>
              <p className="cta-description">Erfahre mehr über unseren Kurs</p>
              <button onClick={() => window.location.href = 'https://www.kurs.ai-allstars.com'} className="cta-button-card">
                Kurs entdecken
              </button>
            </div>

            {/* CTA 3: Preise */}
            <div className="cta-card">
              <div className="cta-icon">💰</div>
              <h3 className="cta-title">Preise</h3>
              <p className="cta-description">Entdecke unsere AI-PASS Pakete und finde das passende für dein Team</p>
              <button onClick={() => window.location.href = 'https://www.preise.ai-allstars.com'} className="cta-button-card">
                Preise entdecken
              </button>
            </div>

            {/* CTA 4: Kontakt */}
            <div className="cta-card">
              <div className="cta-icon">💬</div>
              <h3 className="cta-title">Kontaktieren</h3>
              <p className="cta-description">Kontaktiere uns direkt</p>
              <button onClick={() => window.location.href = 'https://www.kontakt.ai-allstars.com'} className="cta-button-card">
                Kontakt
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
