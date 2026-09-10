
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const services = t("aboutUs.services", { returnObjects: true });

  return (
    <main className="bg-brand-warm pt-[76px]">
      <section className="relative overflow-hidden bg-brand-deep py-20 text-brand-warm md:py-28">
        <div className="container grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow text-2xl font-extrabold">{t("aboutUs.title")}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-brand-pale md:text-7xl">
              {t("aboutUs.heading")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-mist md:text-lg">
              {t("aboutUs.description")}
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-brand-pale/20 shadow-2xl">
            <img
              src="/elwaleed.jpeg"
              alt="ELWALEED export packaging"
              className="h-[360px] w-full object-cover md:h-[440px]"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-14 md:grid-cols-[.85fr_1.15fr] md:gap-24">
          <div>
            <p className="eyebrow text-2xl font-extrabold">{t("aboutUs.whatWeDo")}</p>
            <h2 className="section-title">{t("aboutUs.missionTitle")}</h2>
            <p className="mt-4 text-xl leading-8 text-brand-green">
              {t("aboutUs.mission")}
            </p>
          </div>
          <div>
            <p className="max-w-3xl mt-4 text-xl leading-8 text-brand-green">
              {t("aboutUs.description2")}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="border-s-4 border-brand-gold bg-brand-pale/35 px-5 py-4 font-bold text-brand-deep"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs