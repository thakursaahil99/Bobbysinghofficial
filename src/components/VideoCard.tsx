import Image from "next/image";

export function VideoCard({
  href,
  thumb,
  title,
  note,
  meta,
  length,
}: {
  href: string;
  thumb: string;
  title: string;
  note?: string;
  meta?: string;
  length?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Play"
      className="group flex h-full flex-col"
    >
      <div className="relative aspect-video overflow-hidden rounded-[14px] bg-paper-2">
        <Image
          src={thumb}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 700px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-red text-white transition-transform duration-300 group-hover:scale-110">
          <svg width="11" height="13" viewBox="0 0 12 14" fill="currentColor">
            <path d="M0 0l12 7-12 7z" />
          </svg>
        </span>
        {length && (
          <span className="absolute bottom-3 right-3 rounded-full bg-ink/85 px-2.5 py-1 text-[0.65rem] font-medium text-white">
            {length}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 pt-4">
        <h3 className="text-base leading-snug transition-colors group-hover:text-red">
          {title}
        </h3>
        {note && <p className="text-sm leading-relaxed text-ink-2">{note}</p>}
        {meta && (
          <p className="mt-auto pt-2 text-xs uppercase tracking-[0.12em] text-mute">
            {meta}
          </p>
        )}
      </div>
    </a>
  );
}
