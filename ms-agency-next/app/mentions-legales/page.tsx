import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales & Politique de confidentialité",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>

      {/* ── MENTIONS LÉGALES ── */}
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>Mentions légales</h1>
      <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 48 }}>Dernière mise à jour : avril 2025</p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Éditeur du site</h2>
        <p style={p}>
          <strong style={strong}>MS Agency</strong><br />
          Entrepreneur individuel<br />
          2 Rue Léonce Reynaud, 75016 Paris<br />
          SIRET : 91942745000011<br />
          N° TVA intracommunautaire : FR62919427450<br />
          Email : <a href="mailto:contact@ms-agency.fr" style={link}>contact@ms-agency.fr</a><br />
          Téléphone : 07 83 33 45 43
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Directeur de la publication</h2>
        <p style={p}>Le directeur de la publication est le représentant légal de MS Agency.</p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Hébergement</h2>
        <p style={p}>
          <strong style={strong}>Vercel Inc.</strong><br />
          340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis<br />
          <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={link}>vercel.com</a>
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Propriété intellectuelle</h2>
        <p style={p}>
          L'ensemble du contenu de ce site (textes, images, logos, structure) est la propriété exclusive de MS Agency et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Limitation de responsabilité</h2>
        <p style={p}>
          MS Agency s'efforce d'assurer l'exactitude des informations publiées sur ce site mais ne peut garantir leur exhaustivité. MS Agency se réserve le droit de modifier le contenu à tout moment sans préavis.
        </p>
      </section>

      <hr style={hr} />

      {/* ── POLITIQUE DE CONFIDENTIALITÉ ── */}
      <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8, marginTop: 64 }}>Politique de confidentialité</h1>
      <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: 48 }}>Conformément au RGPD (UE) 2016/679 et à la loi Informatique et Libertés</p>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Responsable du traitement</h2>
        <p style={p}>
          MS Agency — Entrepreneur individuel<br />
          2 Rue Léonce Reynaud, 75016 Paris<br />
          <a href="mailto:contact@ms-agency.fr" style={link}>contact@ms-agency.fr</a>
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Données collectées et finalités</h2>
        <table style={table}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
              <th style={th}>Données</th>
              <th style={th}>Finalité</th>
              <th style={th}>Base légale</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={td}>Données de navigation (pages, durée, origine)</td>
              <td style={td}>Mesure d'audience via Google Analytics 4</td>
              <td style={td}>Consentement (art. 6.1.a RGPD)</td>
            </tr>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={td}>Nom, email, téléphone (formulaire de contact)</td>
              <td style={td}>Réponse à votre demande commerciale</td>
              <td style={td}>Intérêt légitime (art. 6.1.f RGPD)</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Cookies utilisés</h2>
        <table style={table}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
              <th style={th}>Nom</th>
              <th style={th}>Rôle</th>
              <th style={th}>Durée</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={td}>ms_cookie_consent</td>
              <td style={td}>Mémorise votre choix de consentement</td>
              <td style={td}>12 mois</td>
            </tr>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <td style={td}>_ga, _ga_*</td>
              <td style={td}>Google Analytics 4 — audience anonymisée</td>
              <td style={td}>13 mois</td>
            </tr>
          </tbody>
        </table>
        <p style={{ ...p, marginTop: 12 }}>
          Vous pouvez retirer votre consentement à tout moment en cliquant sur &quot;🍪 Gérer les cookies&quot; en bas de chaque page.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Transfert hors Union Européenne</h2>
        <p style={p}>
          Google Analytics 4 est opéré par Google LLC, dont les serveurs sont situés aux États-Unis. Ce transfert est encadré par les Clauses Contractuelles Types (CCT) approuvées par la Commission Européenne et par le cadre EU-US Data Privacy Framework.
          Pour plus d'informations : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={link}>policies.google.com/privacy</a>
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Durée de conservation</h2>
        <p style={p}>
          Les données de navigation collectées via Google Analytics sont conservées 14 mois maximum. Les données issues du formulaire de contact sont conservées 3 ans à compter du dernier contact.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Vos droits</h2>
        <p style={p}>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul style={{ paddingLeft: 20, color: "rgba(255,255,255,0.65)", lineHeight: 2, marginTop: 8 }}>
          <li>✅ <strong style={strong}>Droit d'accès</strong> — obtenir une copie de vos données</li>
          <li>✅ <strong style={strong}>Droit de rectification</strong> — corriger vos données</li>
          <li>✅ <strong style={strong}>Droit à l'effacement</strong> — supprimer vos données</li>
          <li>✅ <strong style={strong}>Droit d'opposition</strong> — vous opposer au traitement</li>
          <li>✅ <strong style={strong}>Droit à la portabilité</strong> — recevoir vos données dans un format lisible</li>
          <li>✅ <strong style={strong}>Droit au retrait du consentement</strong> — à tout moment, sans justification</li>
        </ul>
        <p style={{ ...p, marginTop: 16 }}>
          Pour exercer ces droits : <a href="mailto:contact@ms-agency.fr" style={link}>contact@ms-agency.fr</a>
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={h2}>Droit de réclamation auprès de la CNIL</h2>
        <p style={p}>
          Si vous estimez que le traitement de vos données n'est pas conforme à la réglementation, vous pouvez introduire une réclamation auprès de la <strong style={strong}>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong> :{" "}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" style={link}>cnil.fr/fr/plaintes</a>
        </p>
      </section>

    </main>
  );
}

/* ── styles ── */
const h2: React.CSSProperties = {
  fontSize: "1.05rem",
  fontWeight: 700,
  marginBottom: 14,
  color: "#fff",
};
const p: React.CSSProperties = {
  color: "rgba(255,255,255,0.65)",
  lineHeight: 1.8,
  margin: 0,
};
const strong: React.CSSProperties = { color: "#fff" };
const link: React.CSSProperties = { color: "#4d9eff", textDecoration: "underline", textUnderlineOffset: "3px" };
const hr: React.CSSProperties = { border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "48px 0" };
const table: React.CSSProperties = { width: "100%", borderCollapse: "collapse", fontSize: 13, color: "rgba(255,255,255,0.65)" };
const th: React.CSSProperties = { textAlign: "left", padding: "10px 12px", color: "#fff", fontWeight: 600 };
const td: React.CSSProperties = { padding: "10px 12px", verticalAlign: "top" };
