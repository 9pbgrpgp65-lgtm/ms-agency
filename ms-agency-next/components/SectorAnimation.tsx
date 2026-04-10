"use client";

type Props = { sector: "garage" | "plombier" };

export default function SectorAnimation({ sector }: Props) {
  if (sector === "garage") return <GarageAnim />;
  return <PlombierAnim />;
}

function GarageAnim() {
  return (
    <div className="sa-wrap sa-garage">
      {/* Background grid */}
      <div className="sa-garage-grid" />

      {/* Glow */}
      <div className="sa-garage-glow" />

      {/* Big gear — left */}
      <div className="sa-gear sa-gear-big">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43 4h14l2 10a36 36 0 0 1 8.5 3.5l9-5 10 10-5 9A36 36 0 0 1 85 40l10 2v14l-10 2a36 36 0 0 1-3.5 8.5l5 9-10 10-9-5A36 36 0 0 1 59 84l-2 10H43l-2-10a36 36 0 0 1-8.5-3.5l-9 5-10-10 5-9A36 36 0 0 1 15 58l-10-2V42l10-2a36 36 0 0 1 3.5-8.5l-5-9 10-10 9 5A36 36 0 0 1 41 14Z" fill="#2a2a2a" stroke="#444" strokeWidth="1"/>
          <circle cx="50" cy="50" r="16" fill="#1a1a1a" stroke="#444" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="6" fill="#333"/>
        </svg>
      </div>

      {/* Small gear — right */}
      <div className="sa-gear sa-gear-small">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M43 4h14l2 10a36 36 0 0 1 8.5 3.5l9-5 10 10-5 9A36 36 0 0 1 85 40l10 2v14l-10 2a36 36 0 0 1-3.5 8.5l5 9-10 10-9-5A36 36 0 0 1 59 84l-2 10H43l-2-10a36 36 0 0 1-8.5-3.5l-9 5-10-10 5-9A36 36 0 0 1 15 58l-10-2V42l10-2a36 36 0 0 1 3.5-8.5l-5-9 10-10 9 5A36 36 0 0 1 41 14Z" fill="#1e1e1e" stroke="#E63000" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="16" fill="#111" stroke="#E63000" strokeWidth="1.5"/>
          <circle cx="50" cy="50" r="5" fill="#E63000"/>
        </svg>
      </div>

      {/* Car SVG */}
      <div className="sa-car">
        <svg viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <rect x="10" y="42" width="180" height="36" rx="10" fill="#E63000"/>
          {/* Roof */}
          <path d="M55 42 L75 16 L135 16 L155 42Z" fill="#c52500"/>
          {/* Windshield front */}
          <path d="M128 42 L148 42 L135 18Z" fill="#87CEEB" opacity="0.7"/>
          {/* Windshield rear */}
          <path d="M60 42 L75 18 L88 42Z" fill="#87CEEB" opacity="0.7"/>
          {/* Side window */}
          <rect x="92" y="20" width="32" height="20" rx="3" fill="#87CEEB" opacity="0.7"/>
          {/* Wheel left */}
          <circle cx="52" cy="78" r="16" fill="#111"/>
          <circle cx="52" cy="78" r="10" fill="#222"/>
          <circle cx="52" cy="78" r="4" fill="#555"/>
          {/* Wheel right */}
          <circle cx="148" cy="78" r="16" fill="#111"/>
          <circle cx="148" cy="78" r="10" fill="#222"/>
          <circle cx="148" cy="78" r="4" fill="#555"/>
          {/* Headlight */}
          <ellipse cx="188" cy="55" rx="7" ry="5" fill="#FFE082" opacity="0.9"/>
          {/* Tail light */}
          <ellipse cx="12" cy="55" rx="6" ry="4" fill="#E53935" opacity="0.8"/>
        </svg>
      </div>

      {/* Wrench */}
      <div className="sa-wrench-icon">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 4a14 14 0 0 0-13 19L8 50a4 4 0 1 0 6 6L41 19A14 14 0 0 0 48 4z" fill="#555" stroke="#666" strokeWidth="1.5"/>
          <circle cx="48" cy="12" r="5" fill="#888"/>
        </svg>
      </div>

      {/* Speed lines */}
      <div className="sa-speed-lines">
        <div className="sa-line" style={{ top: "52%", width: "40px", left: "5%" }} />
        <div className="sa-line" style={{ top: "58%", width: "25px", left: "8%" }} />
        <div className="sa-line" style={{ top: "65%", width: "35px", left: "4%" }} />
      </div>

      {/* Label */}
      <div className="sa-badge sa-badge-garage">Garage Auto</div>
    </div>
  );
}

function PlombierAnim() {
  return (
    <div className="sa-wrap sa-plombier">

      {/* Pipe network — CSS */}
      <div className="sa-pipes">
        {/* Top horizontal */}
        <div className="sa-pipe sa-pipe-h" style={{ top: "22%", left: "15%", width: "55%" }} />
        {/* Vertical down */}
        <div className="sa-pipe sa-pipe-v" style={{ top: "22%", left: "68%", height: "45%" }} />
        {/* Bottom horizontal */}
        <div className="sa-pipe sa-pipe-h" style={{ top: "65%", left: "30%", width: "40%" }} />
        {/* Left vertical */}
        <div className="sa-pipe sa-pipe-v" style={{ top: "22%", left: "15%", height: "30%" }} />
        {/* Connectors (elbows) */}
        <div className="sa-elbow" style={{ top: "calc(22% - 6px)", left: "calc(68% - 6px)" }} />
        <div className="sa-elbow" style={{ top: "calc(65% - 6px)", left: "calc(68% - 6px)" }} />
        <div className="sa-elbow" style={{ top: "calc(22% - 6px)", left: "calc(15% - 6px)" }} />
      </div>

      {/* Water drops */}
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className={`sa-drop sa-drop-${i}`}>
          <svg viewBox="0 0 24 30" fill="none">
            <path d="M12 2 C12 2 3 14 3 19 a9 9 0 0 0 18 0 C21 14 12 2 12 2Z" fill="#1D9BF0" opacity="0.85"/>
          </svg>
        </div>
      ))}

      {/* Faucet */}
      <div className="sa-faucet">
        <svg viewBox="0 0 60 60" fill="none">
          <rect x="10" y="10" width="40" height="12" rx="4" fill="#1D3557"/>
          <rect x="24" y="22" width="12" height="16" rx="3" fill="#1D3557"/>
          <path d="M20 38 Q30 44 40 38" stroke="#1D3557" strokeWidth="5" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      {/* Wrench */}
      <div className="sa-wrench-p">
        <svg viewBox="0 0 60 60" fill="none">
          <path d="M48 4a14 14 0 0 0-13 19L8 50a4 4 0 1 0 6 6L41 19A14 14 0 0 0 48 4z" fill="#1D3557" opacity="0.7"/>
          <circle cx="48" cy="12" r="5" fill="#E63946"/>
        </svg>
      </div>

      {/* Ripple at drop landing */}
      <div className="sa-ripple" />

      {/* Label */}
      <div className="sa-badge sa-badge-plombier">Plomberie</div>
    </div>
  );
}
