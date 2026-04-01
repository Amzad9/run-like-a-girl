import type { Metadata } from "next";
import Image from "next/image";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Swag | Run Like A Girl",
  description: "See what race-day swag you'll receive at Run Like A Girl.",
};

const swagItems = [
  {
    title: "Official Race Shirt",
    body: "Commemorative race shirt included with registration while supplies last.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Custom Finisher Medal",
    body: "Beautiful custom finisher medal to celebrate your strong finish.",
    image: "/medal.png",
    imageClassName: "object-contain p-4",
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
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {swagItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              <div className="relative h-44 w-full border-b border-white/10 bg-black/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`${item.imageClassName ?? "object-cover"} opacity-80`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h2>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
