"use client";

export default function AvailabilityBadge() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  const hour = now.getHours();
  const isAvailable = day >= 1 && day <= 5 && hour >= 9 && hour < 19;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: isAvailable ? "var(--green)" : "var(--white-30)",
      }} />
      <span style={{
        fontSize: "14px",
        color: isAvailable ? "var(--green)" : "var(--white-50)",
        fontWeight: 600,
      }}>
        {isAvailable ? "Disponible maintenant" : "On vous répond sous 24h"}
      </span>
    </div>
  );
}
