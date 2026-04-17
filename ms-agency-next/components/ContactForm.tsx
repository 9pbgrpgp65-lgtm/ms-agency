"use client";

import { useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

type FormData = {
  prenom: string;
  nom: string;
  telephone: string;
  commerce: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.prenom.trim()) errors.prenom = "Prénom requis";
  if (!data.nom.trim()) errors.nom = "Nom requis";
  if (!data.telephone.trim()) {
    errors.telephone = "Téléphone requis";
  } else if (!/^[0-9\s\+\-\.]{8,}$/.test(data.telephone.trim())) {
    errors.telephone = "Numéro invalide";
  }
  if (!data.commerce) errors.commerce = "Veuillez choisir un secteur";
  return errors;
}

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    telephone: "",
    commerce: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitState("loading");
    try {
      const text =
        `🆕 *Nouvelle demande ms48agency*\n\n` +
        `👤 *Nom :* ${formData.prenom} ${formData.nom}\n` +
        `📞 *Téléphone :* ${formData.telephone}\n` +
        `🏪 *Commerce :* ${formData.commerce}\n` +
        `💬 *Message :* ${formData.message || "—"}`;

      await fetch(
        `https://api.telegram.org/bot8349577159:AAGC36kcwzihTMokx4-jfq_NVNPor_44MIw/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: 530187396,
            text,
            parse_mode: "Markdown",
          }),
        }
      );

      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="contact-form">
        <div className="form-success">
          <div className="form-success-icon">✅</div>
          <h3>Message envoyé !</h3>
          <p>
            Merci {formData.prenom}, nous vous répondons sous 24h avec votre devis
            personnalisé.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            placeholder="Jean"
            value={formData.prenom}
            onChange={handleChange}
            aria-invalid={!!errors.prenom}
            aria-describedby={errors.prenom ? "prenom-error" : undefined}
            autoComplete="given-name"
          />
          {errors.prenom && (
            <span id="prenom-error" className="form-error" role="alert">
              {errors.prenom}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            placeholder="Dupont"
            value={formData.nom}
            onChange={handleChange}
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? "nom-error" : undefined}
            autoComplete="family-name"
          />
          {errors.nom && (
            <span id="nom-error" className="form-error" role="alert">
              {errors.nom}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="telephone">Téléphone</label>
        <input
          id="telephone"
          name="telephone"
          type="tel"
          placeholder="06 12 34 56 78"
          value={formData.telephone}
          onChange={handleChange}
          aria-invalid={!!errors.telephone}
          aria-describedby={errors.telephone ? "telephone-error" : undefined}
          autoComplete="tel"
        />
        {errors.telephone && (
          <span id="telephone-error" className="form-error" role="alert">
            {errors.telephone}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="commerce">Type de commerce</label>
        <select
          id="commerce"
          name="commerce"
          value={formData.commerce}
          onChange={handleChange}
          aria-invalid={!!errors.commerce}
          aria-describedby={errors.commerce ? "commerce-error" : undefined}
        >
          <option value="">Choisissez votre secteur</option>
          <option value="restaurant">Restaurant / Snack / Bar</option>
          <option value="garage">Garage / Auto</option>
          <option value="sante">Cabinet médical / Dentiste / Kiné</option>
          <option value="artisan">Artisan (plombier, électricien…)</option>
          <option value="autoecole">Auto école</option>
          <option value="beaute">Salon de beauté / Coiffure</option>
          <option value="commerce">Commerce de détail</option>
          <option value="autre">Autre</option>
        </select>
        {errors.commerce && (
          <span id="commerce-error" className="form-error" role="alert">
            {errors.commerce}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="message">Votre projet</label>
        <textarea
          id="message"
          name="message"
          placeholder="Décrivez brièvement votre activité et ce que vous attendez de votre site web…"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      {submitState === "error" && (
        <div className="form-error-banner" role="alert">
          Une erreur est survenue. Réessayez ou appelez le{" "}
          <a href="tel:+33783334543">+33 7 83 33 45 43</a>.
        </div>
      )}

      <div className="form-submit">
        <button
          type="submit"
          className="btn-primary"
          disabled={submitState === "loading"}
          aria-busy={submitState === "loading"}
        >
          {submitState === "loading" ? "Envoi en cours…" : "Envoyer ma demande →"}
        </button>
        <p style={{ fontSize: "12px", color: "var(--white-30)", textAlign: "center" }}>
          Réponse garantie sous 24h · Aucun engagement
        </p>
      </div>
    </form>
  );
}
