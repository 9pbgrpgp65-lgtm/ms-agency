export default function AvailabilityBadge() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <div style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "var(--green)",
      }} />
      <span style={{
        fontSize: "14px",
        color: "var(--green)",
        fontWeight: 600,
      }}>
        Disponible 24h/24
      </span>
    </div>
  );
}
