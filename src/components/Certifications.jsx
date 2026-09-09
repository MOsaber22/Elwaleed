import { useTranslation } from "react-i18next";
const Certifications = () => {
  const { t } = useTranslation();
  return (
    <section className="section-shell bg-brand-pale/40">
      <div className="container">
        <p className="eyebrow text-xl font-extrabold">{t("certifications.title")}</p>
        <h2 className="section-title">{t("certifications.heading")}</h2>
        <p className="text-lg text-brand-dark mt-5">{t("certifications.description")}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {["iso9001", "iso22000"].map((cert) => (
            <div
              key={cert}
              className="flex items-center gap-5 rounded-2xl border border-brand-sand/50 bg-brand-warm p-6"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-brand-gold font-extrabold text-brand-gold">
                ISO
              </div>
              <div>
                <h3 className="font-display text-2xl text-brand-gold font-bold">
                  {t(`certifications.certs.${cert}.name`)}
                </h3>
                <p className="text-md text-brand-green font-bold">
                  {t(`certifications.certs.${cert}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
