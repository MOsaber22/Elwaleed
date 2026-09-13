
import { useTranslation } from "react-i18next";

const brands = [
  { key: "elwaaleed", image: "/elwaleed.jpeg" },
  { key: "ramsesFruit", image: "/ramses.jpeg" },
  { key: "elSaifFruit", image: "/elsef.jpeg" },
];

const Brands = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-brand-warm pt-[76px]">
      <section className="relative isolate min-h-[390px] overflow-hidden bg-brand-deep text-brand-warm md:min-h-[470px]">
        <img
          src="/fruits.jpeg"
          alt="Fresh Egyptian produce"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="1200"
          height="800"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-deep via-brand-deep/95 to-brand-green/65" />
        <div className="absolute -end-24 -top-28 -z-10 h-80 w-80 rounded-full bg-brand-gold/25 blur-3xl" />
        <div className="absolute -bottom-36 -start-16 -z-10 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />
        <div className="container flex min-h-[390px] items-center py-20 md:min-h-[470px] md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-2xl font-extrabold text-brand-gold">
              {t("brands.title")}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-brand-pale md:text-7xl">
              {t("brands.heading")}
            </h1>
            <div className="mt-8 h-1 w-24 rounded-full bg-brand-gold" />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container space-y-8">
          {brands.map((brand, index) => (
            <article
              key={brand.key}
              className={`grid overflow-hidden rounded-[2rem] bg-brand-pale/35 md:grid-cols-2 ${
                index === 0 ? "ring-2 ring-brand-gold" : ""
              }`}
            >
              <div className={`min-h-[280px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <img
                  src={brand.image}
                  alt={t(`brands.${brand.key}.name`)}
                  loading="lazy"
                  decoding="async"
                  width="640"
                  height="280"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                {index === 0 && (
                  <span className="eyebrow mb-4 text-xl font-bold">{t("brands.title")}</span>
                )}
                <h2 className="font-display text-4xl text-brand-deep md:text-5xl">
                  {t(`brands.${brand.key}.name`)}
                </h2>
                <p className="mt-3 text-lg font-bold text-brand-gold">
                  {t(`brands.${brand.key}.tagline`)}
                </p>
                <p className="mt-5 max-w-xl text-lg leading-8 text-brand-green">
                  {t(`brands.${brand.key}.description`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Brands