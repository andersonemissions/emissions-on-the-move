import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.gtag === "function") {
      window.gtag("config", "AW-18327978864", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
