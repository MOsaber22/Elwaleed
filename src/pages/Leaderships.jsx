
import Leadership from "../components/Leadership";
import { useTranslation } from "react-i18next";

const Leaderships = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-brand-warm pt-[76px]">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-ink via-brand-deep to-brand-green py-20 text-brand-warm md:py-28">
        <div className="absolute inset-y-0 start-0 w-1 bg-brand-gold/80" />
        <div className="container grid items-center gap-10 md:grid-cols-[1fr_.9fr]">
          <div>
            <p className="eyebrow text-xl font-extrabold">{t("leaderships.title")}</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] text-brand-pale md:text-7xl">
              {t("leaderships.heading")}
            </h1>
          </div>
          <div className="h-[280px] overflow-hidden rounded-[2rem] border border-brand-pale/20 md:h-[360px]">
            <img
              src="/leadership1.jpeg"
              alt={t("leaderships.waleedHammad.name")}
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 42%" }}
            />
          </div>
        </div>
      </section>
      <Leadership detailed />
    </main>
  );
};

export default Leaderships