import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bobby Singh collects, uses and safeguards your information across coaching programs, workshops and the website.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      kicker="Privacy Policy"
      title="Privacy Policy"
      intro="Your privacy and data security are fundamental to our business coaching services and entrepreneurship programs."
      sections={privacy}
    />
  );
}
