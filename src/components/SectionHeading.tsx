import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

export function SectionHeading({
  index,
  label,
  title,
  intro,
  className,
}: {
  index?: string;
  label: string;
  title?: string;
  intro?: React.ReactNode;
  className?: string;
}) {
  return (
    <Container className={className}>
      <Reveal className="flex flex-col gap-5">
        <p className="eyebrow flex items-center gap-3">
          {index && <span>{index}</span>}
          <span className="rule-red" />
          <span>{label}</span>
        </p>
        {title && (
          <SplitText
            as="h2"
            text={title}
            className="display max-w-[20ch] text-[clamp(1.9rem,3.8vw,3rem)] text-ink"
          />
        )}
        {intro && (
          <p className="measure text-base leading-relaxed text-ink-2 sm:text-lg">
            {intro}
          </p>
        )}
      </Reveal>
    </Container>
  );
}
