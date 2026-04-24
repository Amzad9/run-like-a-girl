import type { Metadata } from "next";
import Image from "next/image";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Swag | Run Like A Girl",
  description: "See what race-day swag you'll receive at Run Like A Girl.",
};

type SwagItem = {
  title: string;
  body: string;
  image: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  imageHref?: string;
};

const swagItems: SwagItem[] = [
  {
    title: "Official Race Shirt",
    body: "Commemorative race shirt included with registration while supplies last.",
    image:
      "/shirt.png",
  },

  {
    title: "Race Day Keepsakes",
    body: "Event experience extras and community vibes you'll remember long after race day.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function SwagPage() {
  return (
    <PageShell
      activeLabel="Swag"
      hero={{
        eyebrow: "Swag",
        title: "Run It. Earn It. Celebrate It.",
        subtitle: "Every participant gets race-day perks designed to make your finish feel unforgettable.",
        imageUrl: "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg",
      }}
    >
      <section className="px-4 pt-10 sm:px-8 sm:pt-14">
        <div className="container mx-auto">
          <article className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
            <div className="relative h-88 w-full bg-black/30 sm:h-120">
              <Image
                src="/medal.png"
                alt="Run Like A Girl race medal"
                fill
                className="object-contain p-6 opacity-95 sm:p-10"
                sizes="100vw"
                priority
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-200/90">Featured Swag</p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                Custom Finisher Medal
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                A larger preview of the race medal so participants can see the design details before race day.
              </p>
              <a
                href="/medal.png"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-pink-200 transition hover:text-pink-100"
              >
                Open full-size medal image
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-2">
          {swagItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              <div
                className={`relative w-full border-b border-white/10 bg-black/20 ${
                  item.imageWrapperClassName ?? "min-h-96 md:min-h-190"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`${item.imageClassName ?? "object-contain md:object-cover"} opacity-80`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
                {item.imageHref ? (
                  <a
                    href={item.imageHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold uppercase tracking-wide text-pink-200 transition hover:text-pink-100"
                  >
                    View larger medal image
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
