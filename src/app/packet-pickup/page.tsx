import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Packet Pickup | Run Like A Girl",
  description: "Packet pickup times and race-day pickup details for Run Like A Girl.",
};

const pickupDates = [
  "Saturday, Sept 20 | 10:00 AM - 1:00 PM",
  "Saturday, Sept 27 | 10:00 AM - 1:00 PM",
  "Race Day (Sunday, Oct 4) | Starts 9:00 AM",
];

export default function PacketPickupPage() {
  return (
    <PageShell
      activeLabel="Packet Pickup"
      hero={{
        eyebrow: "Packet Pickup",
        title: "Pick Up Early, Race Smoothly",
        subtitle: "Use one of our pickup windows to save time and start race morning stress-free.",
        imageUrl: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              Pickup Windows
            </h2>
            <ul className="mt-6 space-y-3">
              {pickupDates.map((item) => (
                <li key={item} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white/90">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              If you cannot attend, a friend or family member may pick up your packet for you.
            </p>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Quick Notes</h3>
            <div className="mt-5 space-y-4 text-white/90">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#f3d27d]" /> Westerville Athletic Complex
              </p>
              <p className="flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#f3d27d]" /> Arrive early for parking and warm-up
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#f3d27d]" /> Keep your bib handy on race day
              </p>
            </div>
            <div className="mt-7">
              <Link
                href="/questions"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Questions?
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
