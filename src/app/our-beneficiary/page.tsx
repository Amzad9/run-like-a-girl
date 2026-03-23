import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "Our Beneficiary | Run Like A Girl",
  description: "Meet Girls on the Run Central Ohio, our beneficiary partner.",
};

export default function OurBeneficiaryPage() {
  return (
    <PageShell
      activeLabel="Our Beneficiary (Girls on the Run)"
      hero={{
        eyebrow: "Our Beneficiary",
        title: "Girls on the Run Central Ohio",
        subtitle: "A mission-driven partner helping girls build confidence, joy, and lifelong healthy habits.",
        imageUrl: "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg",
      }}
    >
     

      <section className="px-4 pb-10 sm:px-8 sm:pb-14 my-2">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">
            How Your Support Helps
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="text-xl font-black uppercase text-white">Curriculum Delivery</h3>
              <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Funds help deliver lessons that combine movement with confidence-building and life
                skills for girls in grades 3-8.
              </p>
            </article>
            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h3 className="text-xl font-black uppercase text-white">Community Access</h3>
              <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Proceeds support program access for more families across Central Ohio so more girls
                can participate and thrive.
              </p>
            </article>
          </div>
          <div className="mt-6">
            <Link
              href="https://runsignup.com/Race/OH/Westerville/RunLikeAGirl5KAnd10K"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:text-base"
            >
              Click Here To Register
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
            Why This Partnership Matters
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Healthy Habits",
                body: "Girls build lifelong wellness routines through movement, teamwork, and encouragement.",
              },
              {
                title: "Confidence & Joy",
                body: "Participants develop confidence and a positive self-image in a safe, supportive environment.",
              },
              {
                title: "Community Impact",
                body: "Every registration helps strengthen programs that serve girls and families in Central Ohio.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 pt-10 sm:px-8 sm:pb-8 sm:pt-12">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
            Explore More
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Plan your full race-weekend experience.
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/event-details"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Event Details
            </Link>
            <Link
              href="/swag"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Swag
            </Link>
            <Link
              href="/packet-pickup"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Packet Pickup
            </Link>
            <Link
              href="/questions"
              className="rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              Questions
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
