
import { useTranslation } from "react-i18next";

const leaders = [
  { key: "waleedHammad", image: "/leadership1.jpeg", position: "center 42%" },
  { key: "amrElwaleed", image: "/leadership2.jpeg", position: "center 5%" },
];

const Leadership = ({ detailed = false }) => {
  const { t } = useTranslation();

  return (
    <section id="leadership" className={`section-shell ${detailed ? "bg-brand-warm" : "bg-brand-pale/25"}`}>
      <div className="container">
        {!detailed && (
          <div className="mb-12 text-center">
            <p className="eyebrow text-2xl font-extrabold">{t("leaderships.title")}</p>
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-2">
          {leaders.map((leader) => (
            <article key={leader.key} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(3,33,25,0.1)]">
              <div className="h-[300px] overflow-hidden md:h-[360px]">
                <img
                  src={leader.image}
                  alt={t(`leaderships.${leader.key}.name`)}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: leader.position }}
                />
              </div>
              <div className="p-7 md:p-9">
                <h2 className="font-display text-3xl text-brand-deep md:text-4xl">
                  {t(`leaderships.${leader.key}.name`)}
                </h2>
                <p className="mt-2 font-bold text-brand-gold">
                  {t(`leaderships.${leader.key}.position`)}
                </p>
                {detailed && (
                  <p className="mt-6 text-base leading-8 text-brand-green/80">
                    {t(`leaderships.${leader.key}.description`)}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership