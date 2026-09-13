
import { FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const locations = [
  { key: "ismailia", image: "/location1.jpg", mapUrl: "https://maps.app.goo.gl/3H5cMLKqF1KgpTMU6?g_st=ic" },
  { key: "second", image: "/location2.jpg", mapUrl: "https://maps.app.goo.gl/fVzpnvdRFraimncc9?g_st=ic" },
];

const OurFarms = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-brand-warm pt-[76px]">
      <section className="relative overflow-hidden bg-brand-deep py-20 text-brand-warm md:py-28">
        <div className="container grid items-center gap-10 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="eyebrow text-2xl font-extrabold">{t("ourFarms.title")}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-brand-pale md:text-7xl">
              {t("ourFarms.heading")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-mist md:text-lg">
              {t("ourFarms.description")}
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-brand-pale/20">
            <img
              src="/location2.jpg"
              alt={t("ourFarms.title")}
              loading="eager"
              decoding="async"
              width="640"
              height="360"
              className="h-[280px] w-full object-cover md:h-[360px]"
            />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-2xl font-extrabold">{t("ourFarms.locationsTitle")}</p>
            <h2 className="section-title">{t("ourFarms.locationsHeading")}</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.key}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_rgba(3,33,25,0.1)]"
              >
                <div className="relative h-[280px] md:h-[340px]">
                  <img
                    src={location.image}
                    alt={t(`ourFarms.locations.${location.key}.name`)}
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="340"
                    className="h-full w-full object-cover"
                  />
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t("ourFarms.openMap")}
                    className="absolute -bottom-8 end-8 grid h-24 w-24 place-items-center rounded-2xl bg-brand-dark text-white shadow-lg transition hover:scale-105 hover:bg-[#6fbc40]"
                  >
                    <FaMapMarkerAlt className="text-5xl" aria-hidden="true" />
                  </a>
                </div>
                <div className="px-8 pb-8 pt-14 md:px-10 md:pb-10">
                  <h3 className="font-display text-4xl text-brand-deep md:text-5xl">
                    {t(`ourFarms.locations.${location.key}.name`)}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-brand-green">
                    {t(`ourFarms.locations.${location.key}.location`)}
                  </p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex text-sm font-extrabold text-brand-gold transition hover:text-brand-orange hover:scale-105 duration-300"
                  >
                    {t("ourFarms.openMap")} <span className="ms-2" aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurFarms