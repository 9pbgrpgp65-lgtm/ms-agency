"use client";

import { useEffect } from "react";

export default function CookieConsent() {
  useEffect(() => {
    // Injecter le CSS de tarteaucitron
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://opt-out.ferank.eu/tarteaucitron.css";
    document.head.appendChild(link);

    // Injecter le script tarteaucitron
    const script = document.createElement("script");
    script.src = "https://opt-out.ferank.eu/tarteaucitron.js";
    script.async = true;
    script.onload = () => {
      // @ts-expect-error tarteaucitron global
      const tac = window.tarteaucitron;
      if (!tac) return;

      // @ts-expect-error tarteaucitron global
      window.tarteaucitron.user = window.tarteaucitron.user || {};
      // @ts-expect-error tarteaucitron global
      window.tarteaucitron.user.gtagUa = "G-LKR2EH4900";
      // @ts-expect-error tarteaucitron global
      window.tarteaucitron.user.gtagCrossdomain = false;

      tac.init({
        privacyUrl: "",
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
        moreInfoLink: false,
        useExternalCss: false,
        mandatory: false,
      });

      // @ts-expect-error tarteaucitron global
      (window.tarteaucitron.job = window.tarteaucitron.job || []).push("gtag");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
