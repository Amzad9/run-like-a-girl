import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Trophy } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Event Details | Run Like A Girl",
  description: "Race details for the Run Like A Girl All-Women's Fall Classic.",
};

const distances = [
  { title: "5K", body: "Fast and fun for first-timers, walkers, and runners chasing a strong finish." },
  { title: "10K", body: "A balanced challenge for women ready to level up from shorter distances." },
  { title: "10-Mile", body: "Our longest distance for athletes building strength and race-day confidence." },
];

export default function EventDetailsPage() {
  return (
    <PageShell
      activeLabel="Event Details"
      hero={{
        eyebrow: "Event Details",
        title: "Choose Your Challenge",
        subtitle: "Run the distance that fits your goals and celebrate every mile with a supportive community.",
        imageUrl: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          {distances.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
            >
              <h2 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Race At A Glance
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <CalendarDays className="h-4 w-4" /> Date
              </p>
              <p className="mt-2 text-lg text-white">Sunday, October 4, 2026</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <MapPin className="h-4 w-4" /> Location
              </p>
              <p className="mt-2 text-lg text-white">Westerville Athletic Complex</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-white/85">
                <Trophy className="h-4 w-4" /> Start Time
              </p>
              <p className="mt-2 text-lg text-white">9:00 AM</p>
            </div>
          </div>

          <div className="mt-7">
            <Link
              href="https://runsignup.com/Race/OH/Westerville/RunLikeAGirl5KAnd10K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
            >
              Click Here To Register
              <ArrowRight className="h-4 w-4" strokeWidth={2.6} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
