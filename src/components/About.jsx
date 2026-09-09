import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="section-shell bg-brand-warm">
      <div className="container grid items-center gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-24">
        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center">
          <div className="absolute bottom-5 left-5 rounded-2xl bg-brand-deep p-5 text-brand-warm">
            <strong className="block font-display text-4xl text-brand-pale">
              25+
            </strong>
            <span className="text-xs uppercase tracking-widest text-brand-mist">
              Years of care
            </span>
          </div>
        </div>
        <div>
          <p className="eyebrow text-xl font-extrabold">{t("about.title")}</p>
          <h2 className="section-title">{t("about.heading")}</h2>
          <p className="section-copy">{t("about.description")}</p>
          <p className="mt-4 text-base leading-8 text-brand-green/70">
            {t("about.description2")}
          </p>
          <p className="mt-8 border-s-4 border-brand-gold ps-5 font-display text-2xl italic text-brand-green">
            {t("about.aboutConclusion")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
