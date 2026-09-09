import { useTranslation } from "react-i18next";

const products = [
  [
    "orange",
    "/port.jpeg",
  ],
  [
    "mandarins",
    "/mar.jpeg",
  ],
  [
    "lemons",
    "/lamon.jpeg",
  ],
  [
    "grapes",
    "/isorepublic-autumn-grapes-1.jpg",
  ],
  [
    "mangoes",
    "/manga.jpeg",
  ],
  [
    "pomegranates",
    "/romman.jpeg",
  ],
  [
    "onions",
    "/onion.jpeg",
  ],
  [
    "frozenFruits",
    "/frozenFruits.jpeg",
  ],
];
const Products = () => {
  const { t } = useTranslation();
  return (
    <section id="products" className="section-shell bg-brand-warm">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{t("products.title")}</p>
            <h2 className="section-title">{t("products.heading")}</h2>
            <p className="section-copy">{t("products.description")}</p>
          </div>
          <a className="line-link hover:scale-105 transition duration-300 " href="#quote">
            {t("products.quote")} <span>→</span>
          </a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(([key, image]) => (
            <article
              key={key}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-pale bg-white"
            >
              <div
                className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl text-brand-deep">
                  {t(`products.${key}.name`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-green/65">
                  {t(`products.${key}.description`)}
                </p>
                <a
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-brand-dark bg-transparent px-5 py-3 text-sm font-extrabold text-brand-dark transition hover:border-brand-gold hover:text-brand-gold hover:bg-brand-dark transition duration-300"
                  href="#quote"
                >
                  {t("products.quote")} <span className="ms-2">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
