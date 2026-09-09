import { useTranslation } from "react-i18next";
const steps = ["farm", "selection", "packaging", "export"];
const Process = () => {
  const { t } = useTranslation();
  return (
    <section
      id="process"
      className="section-shell bg-brand-dark text-brand-warm"
    >
      <div className="container">
        <p className="eyebrow text-xl font-extrabold">{t("process.title")}</p>
        <h2 className="section-title text-brand-warm">
          {t("process.heading")}
        </h2>
        <p className="section-copy text-brand-mist/75 text-xl">
          {t("process.overview")}
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step} className="border-t border-brand-sand/30 pt-5">
              <span className="font-display text-4xl text-brand-gold">
                0{index + 1}
              </span>
              <h3 className="mt-8 text-xl font-bold">
                {t(`process.steps.${step}.title`)}
              </h3>
              <p className="mt-3 text-lg leading-7 text-brand-mist/75">
                {t(`process.steps.${step}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
