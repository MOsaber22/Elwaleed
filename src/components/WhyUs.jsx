import { useTranslation } from "react-i18next";
const reasons = ["origin", "selection", "integration", "logistics", "focus"];
const WhyUs = () => {
  const { t } = useTranslation();
  return (
    <section className="section-shell bg-brand-deep text-brand-warm">
      <div className="container">
        <p className="eyebrow text-xl font-extrabold">{t("whyUs.title")}</p>
        <h2 className="section-title text-brand-warm">{t("whyUs.heading")}</h2>
        <div className="mt-12 grid gap-3 md:grid-cols-5">
          {reasons.map((reason, index) => (
            <article
              key={reason}
              className="rounded-2xl border border-brand-mist/15 bg-brand-medium/60 p-5"
            >
              <span className="font-display text-3xl text-brand-gold">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-base text-lg font-bold">
                {t(`whyUs.reasons.${reason}.name`)}
              </h3>
              <p className="mt-2 text-md leading-6 text-brand-mist/70">
                {t(`whyUs.reasons.${reason}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
