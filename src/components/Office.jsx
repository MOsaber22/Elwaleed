import { useTranslation } from "react-i18next";
const Office = () => {
  const { t } = useTranslation();
  return (
    <section className="section-shell bg-brand-pale/30">
      <div className="container grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div className="min-h-[360px] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85')] bg-cover bg-center" />
        <div>
          <p className="eyebrow text-xl font-extrabold">{t("office.title")}</p>
          <h2 className="section-title">{t("office.heading")}</h2>
          <p className="mt-3 font-bold text-brand-gold">
            {t("office.station")}
          </p>
          <p className="text-brand-dark text-lg">{t("office.description")}</p>
          <a className="line-link mt-7 text-lg hover:text-brand-dark hover:underline" href="#contact">
            {t("office.contact")} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Office;
