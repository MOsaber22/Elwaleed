
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const language = i18n.language === "ar" ? "ar" : "en";
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("elwaleed-language", language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(newLanguage);

    setOpen(false);
  };

  useEffect(() => {
    if (location.pathname !== "/" || !location.hash) return;

    const sectionId = location.hash.slice(1);
    const scrollToSection = () => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    const timeoutId = window.setTimeout(scrollToSection, 0);
    return () => window.clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  const goToSection = (id) => {
    setOpen(false);

    if (location.pathname === "/") {
      window.history.replaceState(null, "", `/#${id}`);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate(`/#${id}`);
  };

  const goHome = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-pale/60 bg-brand-warm/90 backdrop-blur-md">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <button type="button" className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-extrabold tracking-[0.18em] text-brand-deep hover:scale-105 transition duration-300" onClick={goHome}>
          <img
            src="/logo2.jpeg"
            alt="ELWALEED EXPORT logo"
            className="h-11 w-11 rounded-full border border-brand-gold object-cover"
          />
          <span className="hidden font-extrabold text-lg md:inline">ELWALEED <span className="text-brand-gold">EXPORT</span></span>
        </button>

        <nav className={`${open ? "grid" : "hidden"} absolute left-0 right-0 top-[76px] grid-cols-2 gap-x-6 gap-y-4 border-b border-brand-pale bg-brand-warm p-6 text-md font-extrabold text-brand-deep min-[1126px]:static min-[1126px]:flex min-[1126px]:flex-row min-[1126px]:items-center min-[1126px]:gap-5 min-[1126px]:border-0 min-[1126px]:bg-transparent min-[1126px]:p-0 hover:scale`}>
          {[['about', 'navbar.about'], ['products', 'navbar.products'], ['process', 'navbar.ourProcess'], ['facility', 'navbar.facility'], ['markets', 'navbar.markets'], ['contact', 'navbar.contact']].map(([id, label]) => <button type="button" key={id} onClick={() => goToSection(id)} className="whitespace-nowrap text-start transition hover:text-brand-gold hover:scale-105">{t(label)}</button>)}
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-full border border-brand-sand px-3 py-2 text-xs font-extrabold text-brand-deep hover:bg-brand-gold hover:text-brand-deep transition" onClick={toggleLanguage}>
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
          <button type="button" className="button-primary hidden sm:inline-flex hover:bg-brand-deep hover:text-brand-gold transition duration-300" onClick={() => goToSection("quote")}>
            {t("navbar.quote")}
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-brand-sand text-brand-deep min-[1126px]:hidden hover:bg-brand-gold hover:text-brand-deep transition" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar