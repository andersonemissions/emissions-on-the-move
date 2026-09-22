import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace("#", "");
      // Small timeout to allow the target page component to mount
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }

    if (typeof window.gtag === "function") {
      window.gtag("config", "AW-18327978864", {
        page_path: pathname,
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
