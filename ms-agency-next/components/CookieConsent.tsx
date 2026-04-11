"use client";

import Script from "next/script";

export default function CookieConsent() {
  return (
    <>
      {/* Tarteaucitron.js — gestion des cookies RGPD */}
      <Script
        src="https://cdn.jsdelivr.net/npm/tarteaucitron@latest/tarteaucitron.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-expect-error tarteaucitron global
          const tac = window.tarteaucitron;
          if (!tac) return;

          tac.init({
            privacyUrl: "/mentions-legales",
            bodyPosition: "bottom",
            hashtag: "#cookies",
            cookieName: "msagency_cookies",
            orientation: "bottom",
            groupServices: false,
            showAlertSmall: false,
            cookieslist: true,
            showIcon: false,
            adblocker: false,
            DenyAllCta: true,
            AcceptAllCta: true,
            highPrivacy: true,
            handleBrowserDNTRequest: false,
            removeCredit: true,
            moreInfoLink: true,
            useExternalCss: false,
            mandatory: true,
            mandatoryCta: true,
          });

          // Google Analytics 4
          // @ts-expect-error tarteaucitron global
          (window.tarteaucitron.job = window.tarteaucitron.job || []).push("gtag");
          // @ts-expect-error tarteaucitron global
          window.tarteaucitron.user.gtagUa = "G-LKR2EH4900";
          // @ts-expect-error tarteaucitron global
          window.tarteaucitron.user.gtagCrossdomain = true;
        }}
      />
    </>
  );
}
