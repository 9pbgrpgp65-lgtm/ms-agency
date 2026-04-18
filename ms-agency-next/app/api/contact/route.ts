import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { prenom, nom, telephone, commerce, message } = await req.json();

  if (!prenom || !nom || !telephone || !commerce) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const commerceLabels: Record<string, string> = {
    restaurant: "Restaurant / Snack / Bar",
    garage: "Garage / Auto",
    sante: "Cabinet médical / Dentiste / Kiné",
    artisan: "Artisan",
    autoecole: "Auto école",
    beaute: "Salon de beauté / Coiffure",
    commerce: "Commerce de détail",
    autre: "Autre",
  };

  await transporter.sendMail({
    from: `"48hAgency Site" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL ?? "contact@48hagency.com",
    subject: `Nouvelle demande — ${prenom} ${nom} (${commerceLabels[commerce] ?? commerce})`,
    text: [
      `Prénom : ${prenom}`,
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      `Type de commerce : ${commerceLabels[commerce] ?? commerce}`,
      `Message : ${message || "—"}`,
    ].join("\n"),
    html: `
      <h2>Nouvelle demande de devis</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
        <tr><td><strong>Prénom</strong></td><td>${prenom}</td></tr>
        <tr><td><strong>Nom</strong></td><td>${nom}</td></tr>
        <tr><td><strong>Téléphone</strong></td><td><a href="tel:${telephone}">${telephone}</a></td></tr>
        <tr><td><strong>Commerce</strong></td><td>${commerceLabels[commerce] ?? commerce}</td></tr>
        <tr><td><strong>Message</strong></td><td>${message || "—"}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ ok: true });
}
