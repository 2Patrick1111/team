import { useEffect, useRef, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
    xing?: string;
    dribbble?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSocialClick = (platform: string, url?: string) => {
    if (!url) return;
    
    if (platform === 'email') {
      window.location.href = `mailto:${url}`;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const getSocialIcon = (platform: string) => {
    const icons: { [key: string]: string } = {
      linkedin: 'fab fa-linkedin-in',
      twitter: 'fab fa-twitter',
      github: 'fab fa-github',
      email: 'fas fa-envelope',
      xing: 'fab fa-xing',
      dribbble: 'fab fa-dribbble'
    };
    return icons[platform] || 'fas fa-link';
  };

  return (
    <div 
      ref={cardRef}
      className="team-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
      }}
    >
      <div className="team-avatar">
        <img src={member.image} alt={member.name} />
      </div>
      <h3 className="team-name">{member.name}</h3>
      <p className="team-role">{member.role}</p>
      <p className="team-description">{member.description}</p>
      <div className="team-social">
        {Object.entries(member.social).map(([platform, url]) => (
          <button
            key={platform}
            className="social-link"
            aria-label={platform}
            onClick={() => handleSocialClick(platform, url)}
          >
            <i className={getSocialIcon(platform)}></i>
          </button>
        ))}
      </div>
    </div>
  );
}
