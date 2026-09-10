import { useTranslation } from "react-i18next";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const phoneNumber = import.meta.env.VITE_CONTACT_PHONE;
  const email = import.meta.env.VITE_CONTACT_EMAIL || "exportelwaleed@gmail.com";
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/";
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/";

  return (
    <footer className="bg-brand-ink py-12 text-brand-mist">
      <div className="container grid gap-8 md:grid-cols-[1.25fr_1fr_1.25fr]">
        <div>
          <div className="text-lg font-extrabold tracking-[0.18em] text-brand-warm">
            ELWALEED <span className="text-brand-gold">EXPORT</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-brand-mist/70">
            {t("hero.description")}
          </p>
        </div>
        <div>
          <p className="font-bold text-brand-warm">{t("footer.contact")}</p>
          <div className="mt-4 space-y-4">
            <a className="group flex items-center gap-3 text-base text-brand-mist/70 transition hover:text-[#EA4335]" href={`mailto:${email}`}>
              <AiOutlineMail className="text-2xl transition group-hover:text-[#EA4335]" aria-hidden="true" /> Email: {email}
            </a>
            <a className="group flex items-center gap-3 text-base text-brand-mist/70 transition hover:text-[#25D366]" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              <FaWhatsapp className="text-2xl transition group-hover:text-[#25D366]" aria-hidden="true" /> WhatsApp
            </a>
            <a className="group flex items-center gap-3 text-base text-brand-mist/70 transition hover:text-[#1877F2]" href={facebookUrl} target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl transition group-hover:text-[#1877F2]" aria-hidden="true" /> Facebook
            </a>
            <a className="group flex items-center gap-3 text-base text-brand-mist/70 transition hover:text-[#E1306C]" href={instagramUrl} target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl transition group-hover:text-[#E1306C]" aria-hidden="true" /> Instagram
            </a>
            <a className="group flex items-center gap-3 text-base text-brand-mist/70 transition hover:text-brand-gold" href={`tel:${phoneNumber}`}>
              <FaPhone className="text-2xl transition group-hover:text-brand-gold" aria-hidden="true" /> +{phoneNumber}
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold text-brand-warm">{t("footer.moreInfo")}</p>
          <Link to="/about-us" className="mt-4 block text-base text-brand-mist/70 transition hover:text-brand-gold">
            {t("aboutUs.title")}
          </Link>
          <Link to="/brands" className="mt-4 block text-base text-brand-mist/70 transition hover:text-brand-gold">
            {t("brands.title")}
          </Link>
          <Link to="/leaderships" className="mt-4 block text-base text-brand-mist/70 transition hover:text-brand-gold">
            {t("leaderships.title")}
          </Link>
          <Link to="/our-farms" className="mt-4 block text-base text-brand-mist/70 transition hover:text-brand-gold">
            {t("ourFarms.title")}
          </Link>
        </div>
      </div>
      <div className="container mt-10 border-t border-brand-mist/15 pt-5 text-xs text-brand-mist/50">
        © 2025 ELWALEED EXPORT. From Egypt to the world.
      </div>
    </footer>
  );
};

export default Footer;
