import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ArchiveLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ArchiveLink = ({ to, children, className = "", style }: ArchiveLinkProps) => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add transition class to body for fade out
    document.body.classList.add("page-transitioning");
    
    // Wait for fade out, then navigate
    setTimeout(() => {
      navigate(to);
      // Scroll to top
      window.scrollTo(0, 0);
      
      // Small delay then remove transition class for fade in
      setTimeout(() => {
        document.body.classList.remove("page-transitioning");
        setIsTransitioning(false);
      }, 100);
    }, 700);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
};

export default ArchiveLink;
