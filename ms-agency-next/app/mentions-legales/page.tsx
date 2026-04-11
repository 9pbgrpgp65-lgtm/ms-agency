import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales & Politique de confidentialité",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Mentions légales</h1>
      <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 48 }}>Dernière mise à jour : avril 2025</p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: "#fff" }}>Éditeur du site</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
          <strong style={{ color: "#fff" }}>MS Agency</strong><br />
          Agence web — France<br />
          Email : <a href="mailto:contact@ms-agency.fr" style={{ color: "#4d9eff" }}>contact@ms-agency.fr</a><br />
          Téléphone : 07 83 33 45 43
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: "#fff" }}>Hébergement</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
          Ce site est hébergé par <strong style={{ color: "#fff" }}>Vercel Inc.</strong><br />
          340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis<br />
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#4d9eff" }}>vercel.com</a>
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "48px 0" }} />

      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Politique de confidentialité</h1>
      <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 48 }}>Conformément au RGPD et à la loi Informatique et Libertés</p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Cookies utilisés</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, color: "rgba(255,255,255,0.65)" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
              <th style={{ textAlign: "left", padding: "10px 12px", color: "#fff" }}>Nom</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: "#fff" }}>Rôle</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: "#fff" }}>Durée</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={{ padding: "10px 12px" }}>ms_cookie_consent</td>
              <td style={{ padding: "10px 12px" }}>Mémorise votre choix de consentement</td>
              <td style={{ padding: "10px 12px" }}>12 mois</td>
            </tr>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={{ padding: "10px 12px" }}>_ga, _ga_*</td>
              <td style={{ padding: "10px 12px" }}>Google Analytics 4 — mesure d'audience anonymisée</td>
              <td style={{ padding: "10px 12px" }}>13 mois</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Finalité du traitement</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
          Google Analytics 4 nous permet de mesurer le nombre de visiteurs, les pages consultées et la provenance du trafic.
          Les données sont anonymisées et ne permettent pas d'identifier personnellement un utilisateur.
          Elles ne sont jamais vendues ni partagées avec des tiers.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Vos droits</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
          Pour exercer ces droits ou retirer votre consentement à tout moment, contactez-nous à{" "}
          <a href="mailto:contact@ms-agency.fr" style={{ color: "#4d9eff" }}>contact@ms-agency.fr</a>{" "}
          ou cliquez sur le lien <strong style={{ color: "#fff" }}>"Gérer les cookies"</strong> en bas de chaque page.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>Contact RGPD</h2>
        <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8 }}>
          Pour toute question relative à la protection de vos données :<br />
          <a href="mailto:contact@ms-agency.fr" style={{ color: "#4d9eff" }}>contact@ms-agency.fr</a>
        </p>
      </section>
    </main>
  );
}
