import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Garage Moretti — Entretien & Réparation automobile à Lyon",
  description:
    "Garage Moretti à Lyon. Entretien, réparation, diagnostic et contrôle technique. Prise de rendez-vous en ligne. Devis gratuit.",
};

const services = [
  {
    title: "Entretien & Révision",
    desc: "Vidange, filtres, distribution, freins. Révision complète selon le carnet constructeur. Toutes marques.",
    tag: "Dès 89€",
  },
  {
    title: "Réparation mécanique",
    desc: "Embrayage, suspension, direction, transmission. Diagnostic précis avant toute intervention.",
    tag: "Devis gratuit",
  },
  {
    title: "Diagnostic électronique",
    desc: "Lecture des codes défauts sur toutes marques. Matériel de diagnostic dernière génération.",
    tag: "Dès 49€",
  },
  {
    title: "Pneumatiques",
    desc: "Montage, équilibrage et parallélisme. Large stock de pneus toutes saisons disponible.",
    tag: "Prix compétitifs",
  },
  {
    title: "Climatisation",
    desc: "Recharge, désinfection et réparation de circuit. Intervention rapide sous 1h.",
    tag: "Dès 69€",
  },
  {
    title: "Carrosserie & Peinture",
    desc: "Débosselage, retouche peinture, remplacement de pare-chocs. Rendu impeccable garanti.",
    tag: "Sur devis",
  },
];

const stats = [
  { val: "18 ans", label: "d'expérience" },
  { val: "+2 400", label: "clients fidèles" },
  { val: "48h", label: "délai moyen" },
  { val: "100%", label: "satisfaction" },
];

export default function GarageMorettiPage() {
  return (
    <div style={{ fontFamily: "system-ui, 'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#ffffff", color: "#000000", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#ffffff",
        borderBottom: "1px solid #000000",
        padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.5px" }}>
          Garage Moretti
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {["Services", "Tarifs", "À propos", "Contact"].map((l) => (
            <span key={l} style={{
              padding: "8px 16px",
              borderRadius: 999,
              background: "#efefef",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}>{l}</span>
          ))}
          <a href="#rdv" style={{
            padding: "10px 20px",
            borderRadius: 999,
            background: "#000000",
            color: "#ffffff",
            fontSize: 14,
            fontWeight: 500,
            textDecoration: "none",
          }}>Prendre RDV</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        maxWidth: 1136, margin: "0 auto",
        padding: "96px 40px 80px",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
      }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 999,
            background: "#efefef", fontSize: 13, fontWeight: 500,
            marginBottom: 32,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#000", display: "inline-block" }} />
            Lyon 6 — Ouvert du lundi au samedi
          </div>

          <h1 style={{
            fontSize: 52, fontWeight: 700, lineHeight: 1.1,
            letterSpacing: "-1.5px", margin: "0 0 24px",
          }}>
            Votre garage de confiance à Lyon
          </h1>

          <p style={{
            fontSize: 18, color: "#4b4b4b", lineHeight: 1.6,
            margin: "0 0 40px", maxWidth: 460,
          }}>
            Entretien, réparation et diagnostic automobile. Devis gratuit sous 2h, intervention sous 48h. Toutes marques, toutes générations.
          </p>

          <div style={{ display: "flex", gap: 12 }}>
            <a href="#rdv" style={{
              padding: "14px 28px", borderRadius: 999,
              background: "#000000", color: "#ffffff",
              fontSize: 16, fontWeight: 500, textDecoration: "none",
            }}>Prendre RDV →</a>
            <a href="#services" style={{
              padding: "14px 28px", borderRadius: 999,
              background: "#ffffff", color: "#000000",
              border: "1px solid #000000",
              fontSize: 16, fontWeight: 500, textDecoration: "none",
            }}>Nos services</a>
          </div>
        </div>

        {/* Hero visual */}
        <div style={{
          background: "#000000", borderRadius: 12,
          height: 420, display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 24,
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 40, fontWeight: 700, color: "#ffffff", letterSpacing: "-1px" }}>{s.val}</div>
              <div style={{ fontSize: 14, color: "#afafaf", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "#ffffff", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1136, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#afafaf", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16 }}>
              Ce qu&apos;on fait
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.2, margin: 0 }}>
              Tous vos besoins<br />automobile, couverts
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
          }}>
            {services.map((s) => (
              <div key={s.title} style={{
                background: "#ffffff",
                borderRadius: 12,
                padding: "28px 28px 24px",
                boxShadow: "rgba(0,0,0,0.12) 0px 4px 16px",
                display: "flex", flexDirection: "column", gap: 12,
              }}>
                <div style={{
                  display: "inline-flex", alignSelf: "flex-start",
                  padding: "4px 12px", borderRadius: 999,
                  background: "#efefef", fontSize: 12, fontWeight: 500,
                }}>{s.tag}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0, letterSpacing: "-0.3px" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#4b4b4b", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANDE NOIRE ── */}
      <section style={{ background: "#000000", padding: "64px 40px" }}>
        <div style={{
          maxWidth: 1136, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: "#ffffff", letterSpacing: "-1px", margin: "0 0 12px" }}>
              Devis gratuit sous 2 heures
            </h2>
            <p style={{ fontSize: 16, color: "#afafaf", margin: 0 }}>
              Décrivez votre problème, on vous rappelle rapidement.
            </p>
          </div>
          <a href="#rdv" style={{
            padding: "16px 32px", borderRadius: 999,
            background: "#ffffff", color: "#000000",
            fontSize: 16, fontWeight: 600, textDecoration: "none",
            whiteSpace: "nowrap",
          }}>Demander un devis →</a>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{
          maxWidth: 1136, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
        }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "#afafaf", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16 }}>
              Notre histoire
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-1px", lineHeight: 1.2, margin: "0 0 24px" }}>
              18 ans au service<br />des Lyonnais
            </h2>
            <p style={{ fontSize: 16, color: "#4b4b4b", lineHeight: 1.7, margin: "0 0 16px" }}>
              Fondé en 2006, Garage Moretti est un garage indépendant spécialisé dans l&apos;entretien et la réparation de véhicules toutes marques. Notre équipe de 6 techniciens certifiés intervient avec rigueur et transparence.
            </p>
            <p style={{ fontSize: 16, color: "#4b4b4b", lineHeight: 1.7, margin: 0 }}>
              Chaque client reçoit un devis détaillé avant toute intervention. Pas de mauvaises surprises, jamais.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { val: "Lun–Ven", label: "8h–19h" },
              { val: "Samedi", label: "8h–17h" },
              { val: "Lyon 6e", label: "12 rue Duquesne" },
              { val: "+33 4 78 …", label: "Appel direct" },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "24px", borderRadius: 12,
                boxShadow: "rgba(0,0,0,0.12) 0px 4px 16px",
              }}>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{item.val}</div>
                <div style={{ fontSize: 13, color: "#afafaf" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RDV / CONTACT ── */}
      <section id="rdv" style={{ background: "#ffffff", padding: "80px 40px", borderTop: "1px solid #e2e2e2" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: "#afafaf", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16 }}>
            Prise de rendez-vous
          </div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-1px", margin: "0 0 12px" }}>
            Réservez en ligne
          </h2>
          <p style={{ fontSize: 16, color: "#4b4b4b", margin: "0 0 40px", lineHeight: 1.6 }}>
            Choisissez votre créneau, décrivez votre véhicule et votre problème. Confirmation immédiate.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
            {["Marque et modèle du véhicule", "Type d'intervention souhaitée", "Votre numéro de téléphone"].map((placeholder) => (
              <input
                key={placeholder}
                type="text"
                placeholder={placeholder}
                style={{
                  width: "100%", padding: "16px 20px",
                  border: "1px solid #000000", borderRadius: 8,
                  fontSize: 15, outline: "none",
                  boxSizing: "border-box",
                }}
              />
            ))}
            <button style={{
              padding: "16px", borderRadius: 999,
              background: "#000000", color: "#ffffff",
              fontSize: 16, fontWeight: 600, border: "none",
              cursor: "pointer", marginTop: 8,
            }}>
              Confirmer le rendez-vous →
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#000000", padding: "64px 40px 40px" }}>
        <div style={{ maxWidth: 1136, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 20, color: "#ffffff", marginBottom: 16, letterSpacing: "-0.5px" }}>
                Garage Moretti
              </div>
              <p style={{ fontSize: 14, color: "#afafaf", lineHeight: 1.7, margin: 0 }}>
                Garage automobile indépendant à Lyon 6. Entretien et réparation toutes marques depuis 2006.
              </p>
            </div>
            {[
              { title: "Services", links: ["Entretien", "Réparation", "Diagnostic", "Pneumatiques"] },
              { title: "Garage", links: ["À propos", "Notre équipe", "Avis clients", "Partenaires"] },
              { title: "Contact", links: ["Prendre RDV", "Devis gratuit", "12 rue Duquesne", "Lyon 6e"] },
            ].map((col) => (
              <div key={col.title}>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#ffffff", marginBottom: 16 }}>{col.title}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((l) => (
                    <span key={l} style={{ fontSize: 14, color: "#afafaf", cursor: "pointer" }}>{l}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid #333", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 13, color: "#afafaf" }}>© 2026 Garage Moretti. Tous droits réservés.</span>
            <span style={{ fontSize: 13, color: "#afafaf" }}>
              Site réalisé par{" "}
              <Link href="/" style={{ color: "#ffffff", textDecoration: "underline" }}>48hAgency</Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
