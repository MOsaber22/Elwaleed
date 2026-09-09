
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-pale/60 bg-brand-warm/90 backdrop-blur-md">
      <div className="container flex h-[76px] items-center justify-between gap-6">
        <a className="flex items-center gap-3 text-sm font-extrabold tracking-[0.18em] text-brand-deep hover:scale-105 transition duration-300" href="#home" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-brand-gold bg-brand-deep text-lg text-brand-gold">E</span>
          <span className="font-extrabold text-lg">ELWALEED <span className="text-brand-gold">EXPORT</span></span>
        </a>

        <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-[76px] flex-col gap-5 border-b border-brand-pale bg-brand-warm p-6 text-md font-extrabold text-brand-deep md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 hover:scale`}>
          {[['about', 'navbar.about'], ['products', 'navbar.products'], ['process', 'navbar.ourProcess'], ['facility', 'navbar.facility'], ['markets', 'navbar.markets'], ['contact', 'navbar.contact']].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="transition hover:text-brand-gold hover:scale-105">{t(label)}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-full border border-brand-sand px-3 py-2 text-xs font-extrabold text-brand-deep hover:bg-brand-gold hover:text-brand-deep transition" onClick={toggleLanguage}>
            {i18n.language === "en" ? "AR" : "EN"}
          </button>
          <a className="button-primary hidden sm:inline-flex hover:bg-brand-deep hover:text-brand-gold transition duration-300" href="#quote">
            {t("navbar.quote")}
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-brand-sand text-brand-deep md:hidden hover:bg-brand-gold hover:text-brand-deep transition" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar