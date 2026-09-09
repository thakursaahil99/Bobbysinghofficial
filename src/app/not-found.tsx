import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-6 text-[clamp(2.5rem,7vw,5rem)]">
        This page isn&rsquo;t on the menu.
      </h1>
      <p className="measure mt-6 text-lg text-ink-2">
        The link may be old or mistyped. Head back to the start.
      </p>
      <div className="mt-10">
        <Link href="/" className="btn btn-solid">
          Return home
        </Link>
      </div>
    </Container>
  );
}
