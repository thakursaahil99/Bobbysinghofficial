import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";
import { cn } from "@/lib/cn";

export function PageHero({
  kicker,
  title,
  intro,
  aside,
  className,
}: {
  kicker: string;
  title: string;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative isolate px-gutter pt-20 pb-14 lg:pt-28 lg:pb-16",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-tint to-paper"
      />
      <Reveal className="mx-auto w-full max-w-[1400px]">
        <p className="eyebrow flex items-center gap-3">
          <span className="rule-red" />
          {kicker}
        </p>
        <SplitText
          as="h1"
          text={title}
          className="display-hero mt-6 max-w-[16ch] text-ink"
        />
        {(intro || aside) && (
          <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            {intro && (
              <p className="text-lg leading-relaxed text-ink-2">{intro}</p>
            )}
            {aside && <div className="lg:justify-self-end">{aside}</div>}
          </div>
        )}
      </Reveal>
    </section>
  );
}
