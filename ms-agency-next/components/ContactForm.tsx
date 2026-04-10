"use client";

import { useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    telephone: "",
    commerce: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState("loading");

    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitState("success");
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
            required
            autoComplete="given-name"
          />
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
            required
            autoComplete="family-name"
          />
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
          required
          autoComplete="tel"
        />
      </div>

      <div className="form-group">
        <label htmlFor="commerce">Type de commerce</label>
        <select
          id="commerce"
          name="commerce"
          value={formData.commerce}
          onChange={handleChange}
          required
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

      <div className="form-submit">
        <button
          type="submit"
          className="btn-primary"
          disabled={submitState === "loading"}
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
