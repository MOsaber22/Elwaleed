import { useState } from "react";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") || "-";
    const email = formData.get("email") || "-";
    const companyName = formData.get("companyName") || "-";
    const whatsappNumber = formData.get("WhatsAppNumber") || "-";
    const product = formData.get("product") || "-";
    const quantity = formData.get("quantity") || "-";
    const packagingRequirement = formData.get("packagingRequirement") || "-";
    const destinationCountry = formData.get("destinationCountry") || "-";
    const additionalRequirements = formData.get("additionalRequirements") || "-";

    const message = [
      "New quotation request - ELWALEED EXPORT",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${companyName}`,
      `Customer WhatsApp: ${whatsappNumber}`,
      `Product: ${product}`,
      `Quantity: ${quantity}`,
      `Packaging: ${packagingRequirement}`,
      `Destination: ${destinationCountry}`,
      `Additional requirements: ${additionalRequirements}`,
    ].join("\n");

    window.open(
      `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <section id="contact" className="section-shell bg-brand-warm">
      <div
        id="quote"
        className="container grid gap-10 md:grid-cols-[.65fr_1.35fr] lg:gap-16"
      >
        <div>
          <p className="eyebrow text-xl font-extrabold">{t("contact.title")}</p>
          <h2 className="section-title">{t("contact.heading")}</h2>
          <p className="section-copy">{t("contact.description")}</p>
        </div>
        <form
          className="grid w-full gap-5 rounded-[1.25rem] border border-brand-mist/70 bg-white p-6 shadow-[0_18px_45px_rgba(20,55,40,.08)] md:grid-cols-2 md:p-10 lg:p-12"
          onSubmit={handleSubmit}
        >
          <input name="name" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" required placeholder={t("contact.form.name")} />
          <input name="email" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" required type="email" placeholder={t("contact.form.email")} />
          <input name="companyName" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" placeholder={t("contact.form.companyName")} />
          <input name="WhatsAppNumber" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" placeholder={t("contact.form.WhatsAppNumber")} />
          <input name="quantity" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" placeholder={t("contact.form.quantity")} />
          <input name="packagingRequirement" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" placeholder={t("contact.form.packagingRequirement")} />
          <input name="destinationCountry" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15" placeholder={t("contact.form.destinationCountry")} />
          <select name="product" defaultValue="" className="w-full rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15">
            <option value="" disabled>
              {t("contact.form.selectProduct")}
            </option>
            <option>{t("products.orange.name")}</option>
            <option>{t("products.grapes.name")}</option>
            <option>{t("products.mangoes.name")}</option>
            <option>{t("products.mandarins.name")}</option>
            <option>{t("products.lemons.name")}</option>
            <option>{t("products.pomegranates.name")}</option>
            <option>{t("products.onions.name")}</option>
            <option>{t("products.frozenFruits.name")}</option>
          </select>
          <textarea
            name="additionalRequirements"
            className="min-h-40 w-full resize-y rounded-lg border border-brand-mist bg-brand-warm/20 px-4 py-4 text-brand-deep outline-none transition placeholder:text-brand-green/55 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/15 md:col-span-2"
            placeholder={t("contact.form.additionalRequirements")}
          />
          <button className="button-primary w-fit" type="submit">
            {t("contact.form.send")} <span className="ms-2">→</span>
          </button>
          {sent && (
            <p className="text-sm font-bold text-brand-green md:col-span-2">
              {t("contact.thankYou")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
