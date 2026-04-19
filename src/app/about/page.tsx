import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users } from "lucide-react";

import PageShell from "../../components/PageShell";

export const metadata: Metadata = {
  title: "About | Run Like A Girl",
  description: "Learn about Run Like A Girl and the All-Women’s Fall Classic in Westerville, Ohio.",
};

const values = [
  {
    title: "Community First",
    body: "A race day atmosphere built on encouragement, friendly competition, and shared goals.",
    icon: <Users className="h-5 w-5" strokeWidth={2.2} />,
  },
  {
    title: "Celebrate Every Finish",
    body: "Whether it’s your first 5K or your fastest 10-Mile, we celebrate the work you put in.",
    icon: <Sparkles className="h-5 w-5" strokeWidth={2.2} />,
  },
];

export default function AboutPage() {
  return (
    <PageShell
      activeLabel="About"
      hero={{
        eyebrow: "About",
        title: (
          <>
            Run Like A Girl
            <br />
            All-Women’s Fall Classic
          </>
        ),
        subtitle:
          "We’re building a welcoming, high-energy race day that brings women together to run, connect, and celebrate what’s possible.",
        imageUrl: "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg",
      }}
    >
      <section id="mission" className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
            Join us for an empowering all-women's running event that unites the Central Ohio running community! With options for a 5K, 10K, and 10-miler, there's something for everyone—from elite runners to weekend warriors and first-timers. Experience a morning with friendly competition, camaraderie, and the chance to make new friends. Don't miss out on this fantastic opportunity to celebrate fitness friendship! Proceeds to benefit "Girls on the Run"
            </p>
           

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="https://runsignup.com/Race/OH/Westerville/RunLikeAGirl5KAnd10K"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
              >
                Click Here To Register
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
              >
                View Event Details
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl border border-white/15 bg-white/5 shadow-[0_18px_44px_rgba(0,0,0,0.30)] sm:min-h-[360px]">
              <Image
                src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
                alt="Women runners at the finish line"
                fill
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1e252d] px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-5xl">
            What You Can Expect
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)]"
              >
                <span className="inline-flex rounded-full border border-white/15 bg-white/5 p-3 text-[#f3d27d]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            <div className="flex lg:col-span-5">
              <div className="flex w-full flex-col rounded-[24px] border border-white/15 bg-white/5 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Ready?
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Let’s make race day unforgettable.
                </h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                  If you’re registering, sponsoring, volunteering, or just have a question, reach out—we’ll help you get set.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110 sm:w-fit sm:text-base"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/15 sm:w-fit sm:text-base"
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[220px] overflow-hidden rounded-[24px] border border-white/15 bg-black/40 shadow-[0_18px_44px_rgba(0,0,0,0.25)] sm:min-h-[280px] lg:min-h-0">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Run Like a Girl promotional video"
                >
                  <source src="/abouts/Run%20Like%20a%20Girl%202.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

