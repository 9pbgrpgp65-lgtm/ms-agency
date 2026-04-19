"use client";
import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieConsent from "@/components/CookieConsent";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname.startsWith("/demo");

  if (isDemo) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
      <CookieConsent />
    </>
  );
}
