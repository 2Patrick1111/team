import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import patrickImage from "@/assets/profilbild_1752935146997.png";
import antonioImage from "@/assets/Antonio_1752935777029.png";
import jennyImage from "@/assets/Jenny_1752936012533.png";

const teamMembers = [
  {
    name: "Patrick Thomas",
    role: "CEO & KI-Experte",
    description: "Mit umfassender KI-Expertise und langjähriger Erfahrung in Automatisierung entwickelt Patrick innovative KI-Lösungen, um Unternehmen nachhaltig zu transformieren und interne Prozesse zu optimieren.",
    image: patrickImage,
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Antonio Eichler",
    role: "CEO & KI-Strategieexperte",
    description: "Antonio verbindet fundierte KI-Kenntnisse mit exzellenter Kommunikationsstärke und unterstützt Unternehmen dabei, strategisch und strukturell das volle Potenzial künstlicher Intelligenz auszuschöpfen.",
    image: antonioImage,
    social: {
      linkedin: "#",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Jenny Thomas",
    role: "Controlling und Antragswesen",
    description: "Mit ihrer Expertise im Controlling und der Automatisierung von Antragsprozessen sorgt Jenny für reibungslose Abläufe und ist die Spezialistin für effizientes Antragswesen in unserem Team.",
    image: jennyImage,
    social: {
      linkedin: "#",
      xing: "#",
      email: "#"
    }
  },
  {
    name: "Lisa Hoffmann",
    role: "Business Development Managerin",
    description: "Lisa ist unsere Expertin für Geschäftsentwicklung und Kundenbeziehungen. Sie sorgt dafür, dass unsere KI-Lösungen perfekt auf die individuellen Bedürfnisse unserer Kunden zugeschnitten sind.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&h=240",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Thomas Klein",
    role: "Lead Software Engineer",
    description: "Thomas verantwortet die technische Implementierung unserer KI-Systeme und sorgt für skalierbare, sichere und effiziente Lösungen, die nahtlos in bestehende Unternehmensinfrastrukturen integriert werden können.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&h=240",
    social: {
      linkedin: "#",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Nina Fischer",
    role: "UX/UI Designerin",
    description: "Nina gestaltet intuitive und benutzerfreundliche Interfaces für unsere KI-Anwendungen. Ihr Fokus liegt darauf, komplexe KI-Technologie für Endbenutzer zugänglich und verständlich zu machen.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&h=240",
    social: {
      linkedin: "#",
      dribbble: "#",
      email: "#"
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
            <p className="hero-subtitle">Die Allstars für KI-Transformation</p>
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

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">Bereit für Ihre KI-Transformation?</h2>
          <p className="cta-description">
            Lassen Sie uns gemeinsam das Potenzial der künstlichen Intelligenz für Ihr Unternehmen erschließen. Unser Expertenteam steht Ihnen für eine kostenlose Beratung zur Verfügung.
          </p>
          <div className="cta-buttons">
            <Link href="/kontakt" className="btn-primary">
              <i className="fas fa-calendar-alt"></i>
              Beratungstermin vereinbaren
            </Link>
            <Link href="/roi-calculator" className="btn-secondary">
              <i className="fas fa-calculator"></i>
              ROI-Potenzial berechnen
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
