import { useTranslation } from "react-i18next";
const features = [
  "sorting",
  "grading",
  "qualityControl",
  "packing",
  "cooling",
  "loading",
];
const Facility = () => {
  const { t } = useTranslation();
  return (
    <section id="facility" className="section-shell bg-brand-warm">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div className="order-1">
          <p className="eyebrow text-xl font-extrabold">{t("facility.title")}</p>
          <h2 className="section-title">{t("facility.heading")}</h2>
          <p className="mt-2 font-bold text-lg text-brand-gold">
            {t("facility.station")}
          </p>
          <p className="text-lg text-brand-dark ">{t("facility.description")}</p>
        </div>
        <div className="order-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="rounded-xl bg-brand-pale/40 p-4">
              <strong className="block text-brand-deep text-lg font-bold">
                {t(`facility.features.${feature}.name`)}
              </strong>
              <span className="mt-1 block text-sm leading-5 text-brand-dark/80">
                {t(`facility.features.${feature}.description`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
