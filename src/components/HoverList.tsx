import Link from "next/link";
import Image from "next/image";

type Row = {
  href: string;
  title: string;
  meta: string;
  image: string;
};

export function HoverList({ rows }: { rows: Row[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {rows.map((row) => (
        <Link
          key={row.href}
          href={row.href}
          className="card group flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[var(--shadow-card)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={row.image}
              alt={row.title}
              fill
              sizes="(max-width: 640px) 100vw, 640px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <div className="flex items-center justify-between gap-4 p-6">
            <div>
              <h3 className="text-xl text-ink transition-colors group-hover:text-red">
                {row.title}
              </h3>
              <p className="mt-1 text-sm text-mute">{row.meta}</p>
            </div>
            <span
              aria-hidden
              className="text-lg text-red transition-transform duration-300 group-hover:translate-x-1"
            >
              &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
