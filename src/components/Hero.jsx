import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-deep pb-24 pt-36 text-brand-warm md:pb-32 md:pt-48"
    >
      <div className="hero-background absolute inset-[-4%] bg-[url('/fruits.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,33,25,.96)_0%,rgba(3,33,25,.78)_42%,rgba(3,33,25,.38)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-brand-deep/20" />
      <div className="container relative z-10">
        <div className="max-w-4xl">
          <p className="eyebrow text-3xl font-extrabold">
            {t("hero.logo")} <span className="text-brand-sand">/ EGYPT</span>
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[.94] md:text-8xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-brand-mist md:text-2xl">
            {t("hero.subtitle")}
          </p>
          <p className="mt-4 max-w-2xl text-white leading-8 text-brand-mist/75">
            {t("hero.description")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#products">
              {t("hero.products")} <span className="ms-2">→</span>
            </a>
            <a className="button-outline" href="#quote">
              {t("hero.quote")}
            </a>
          </div>
        </div>
      </div>
      <div className="container relative z-10 mt-20 grid grid-cols-2 gap-6 border-t border-brand-mist/20 pt-6 text-sm md:grid-cols-4">
        <div>
          <strong className="block text-2xl text-brand-pale">01</strong>
          <span className="text-brand-mist/70">Farm sourcing</span>
        </div>
        <div>
          <strong className="block text-2xl text-brand-pale">02</strong>
          <span className="text-brand-mist/70">Quality control</span>
        </div>
        <div>
          <strong className="block text-2xl text-brand-pale">03</strong>
          <span className="text-brand-mist/70">Cold handling</span>
        </div>
        <div>
          <strong className="block text-2xl text-brand-pale">04</strong>
          <span className="text-brand-mist/70">Global delivery</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
