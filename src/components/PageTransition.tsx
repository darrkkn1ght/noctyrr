import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // When route changes, fade out first
    setIsVisible(false);
    
    // Wait for fade out, then update content and fade in
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setIsVisible(true);
    }, 800); // Match the fade-out duration

    return () => clearTimeout(timeout);
  }, [location.pathname, children]);

  // Initial mount - fade in
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-opacity duration-800ms ease-archive ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
