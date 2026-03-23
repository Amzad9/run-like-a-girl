import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import PageShell from "../../components/PageShell";
import { siteContact } from "../../components/siteConfig";

export const metadata: Metadata = {
  title: "Questions | Run Like A Girl",
  description: "Get answers for registration, packet pickup, and race-day questions.",
};

const faq = [
  {
    question: "Can I register online?",
    answer: "Yes. Registration is available through RunSignUp and opens in a new tab from our Register buttons.",
  },
  {
    question: "Can someone else pick up my packet?",
    answer: "Yes. A friend or family member may pick up your race packet if you cannot attend.",
  },
  {
    question: "What time does the race start?",
    answer: "Race day starts at 9:00 AM on Sunday, October 4, 2026.",
  },
];

export default function QuestionsPage() {
  return (
    <PageShell
      activeLabel="Questions"
      hero={{
        eyebrow: "Questions",
        title: "We're Here To Help",
        subtitle: "Need help with registration, packet pickup, or race-day details? Reach out anytime.",
        imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      }}
    >
      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <a
            href={siteContact.phoneHref}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Phone className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Call Us</h2>
            <p className="mt-2 text-white/85">{siteContact.phone}</p>
          </a>
          <a
            href={`mailto:${siteContact.emailShowroom}`}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <Mail className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Email Us</h2>
            <p className="mt-2 text-white/85">{siteContact.emailShowroom}</p>
          </a>
          <Link
            href="/event-details"
            className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.20)] transition hover:bg-white/10"
          >
            <MessageCircle className="h-6 w-6 text-[#f3d27d]" strokeWidth={2.2} />
            <h2 className="mt-4 text-xl font-black uppercase text-white">Event Info</h2>
            <p className="mt-2 text-white/85">See race details, distance options, and registration links.</p>
          </Link>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="container mx-auto rounded-[24px] border border-white/15 bg-[#1e252d] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.35)] sm:p-8">
          <h3 className="text-3xl font-black uppercase tracking-tight text-[#f3d27d] sm:text-4xl">FAQ</h3>
          <div className="mt-6 grid gap-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h4 className="text-lg font-black text-white sm:text-xl">{item.question}</h4>
                <p className="mt-2 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
