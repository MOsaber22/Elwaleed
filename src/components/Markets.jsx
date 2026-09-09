import { useTranslation } from "react-i18next";
const countries = [
  "russia",
  "morocco",
  "qatar",
  "uae",
  "unitedKingdom",
  "saudiArabia",
];
const Markets = () => {
  const { t } = useTranslation();
  return (
    <section id="markets" className="section-shell bg-brand-warm">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow text-xl font-extrabold">{t("markets.title")}</p>
          <h2 className="section-title">{t("markets.heading")}</h2>
          <p className="text-lg text-brand-dark mt-5">{t("markets.description")}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {countries.map((country) => (
              <div
                key={country}
                className="rounded-xl border border-brand-pale bg-white p-4 text-sm font-bold text-brand-deep"
              >
                <span className="me-2 text-brand-gold">+</span>
                {t(`markets.countries.${country}`)}
              </div>
            ))}
          </div>
        </div>
        <div className="relative grid min-h-[390px] place-items-center overflow-hidden rounded-[2rem] bg-brand-deep">
          <div className="absolute h-64 w-64 rounded-full border border-brand-gold/30" />
          <div className="absolute h-40 w-40 rounded-full border border-brand-sand/30" />
          <span className="relative text-center font-display text-4xl text-brand-pale">
            From Egypt
            <br />
            <i className="text-brand-gold">to the world</i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Markets;
