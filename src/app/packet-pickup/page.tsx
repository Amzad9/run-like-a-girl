import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock3, MapPin, ShieldCheck } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Packet Pickup | Run Like A Girl",
  description: "Packet pickup times and race-day pickup details for Run Like A Girl.",
};

const pickupDates = [
  "Saturday, Sept 20 | 10:00 AM - 1:00 PM",
  "Saturday, Sept 27 | 10:00 AM - 1:00 PM",
  "Race Day (Sunday, Oct 4) | Starts 9:00 AM",
];

const checklistItems = [
  "Photo ID (recommended for faster check-in)",
  "Registration confirmation email on your phone",
  "Runner name and event distance (5K, 10K, or 10-Mile)",
  "Comfortable timing to avoid race-morning lines",
];

const proxyRules = [
  "A friend or family member may pick up your packet.",
  "Share your full name and registered distance with your proxy.",
  "Proxies should bring their own ID and your registration confirmation.",
  "Only the registered runner may race with their assigned bib.",
];

export default function PacketPickupPage() {
  return (
    <PageShell
      activeLabel="Packet Pickup"
      hero={{
        eyebrow: "Packet Pickup",
        title: "Pick Up Early, Race Smoothly",
        subtitle: "Use one of our pickup windows to save time and start race morning stress-free.",
        imageUrl:
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1800&q=80",
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

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
              Location And Parking
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Packet pickup is based at Westerville Athletic Complex. Plan to arrive a little early
              so you can park, check in, and review race-day details with our team.
            </p>
            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white/90">
                <p className="flex items-center gap-2 font-semibold">
                  <MapPin className="h-4 w-4 text-[#f3d27d]" />
                  {siteContact.addressLines.join(" ")}
                </p>
              </div>
              <a
                href={siteContact.directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:text-base"
              >
                Open Directions
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
            <h3 className="text-xl font-black uppercase tracking-tight text-white">What To Bring</h3>
            <ul className="mt-4 space-y-3">
              {checklistItems.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/90 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            Picking Up For Someone Else
          </h2>
          <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            We support proxy pickup to make race weekend easier for participants.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {proxyRules.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-white/15 bg-[#1e252d] px-5 py-4 text-white/90"
              >
                {item}
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/15 bg-[#1e252d] p-5">
            <p className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#f3d27d]">
              <ShieldCheck className="h-4 w-4" />
              Important Policy Notes
            </p>
            <p className="mt-3 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Race entries are non-refundable. For safety and accurate timing, unofficial bib
              transfers are not allowed.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://runsignup.com/Race/OH/Westerville/RunLikeAGirl5KAnd10K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
            >
              Click Here To Register
            </Link>
            <Link
              href="/questions"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
            >
              Ask A Question
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
