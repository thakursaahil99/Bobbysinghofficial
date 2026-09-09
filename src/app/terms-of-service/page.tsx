import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for Bobby Singh's business coaching services, workshops and entrepreneurship programs.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      kicker="Terms of Service"
      title="Terms of Service"
      intro="Professional terms and conditions for our business coaching services, workshops and entrepreneurship programs."
      sections={terms}
    />
  );
}
