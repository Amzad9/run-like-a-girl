import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
// const testimonials = [
//   {
//     name: "Chloe L.",
//     message: "The sense of community was amazing! So supportive for my first 5K.",
//     image: "/images/test1.png",
//   },
//   {
//     name: "Maria R.",
//     message: "Completing the 10-Mile was a proud moment. A well-organized, friendly competition.",
//     image: "/images/test2.png",
//   },
//   {
//     name: "Janet P.",
//     message: "Loved the non-profit focus and the custom medal is beautiful!",
//     image: "/images/test3.png",
//   },
// ];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#2a3138,#1a2027_50%,#161b22)] text-[#f1f4f6]">
      <div className="">
        <SiteHeader activeLabel="Home" />

        <section
          id="home"
          className="relative overflow-hidden px-4 bg-[#1e252d] pt-8 pb-8"
        >
          {/* <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg"
              alt="Westerville athletic complex background"
              fill
              className="object-cover opacity-35"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#171b22]/95 via-[#1c232b]/85 to-[#1c232b]/35" />
          </div> */}
          <div className="container mx-auto">
            <div className="relative z-10 grid gap-6 lg:grid-cols-2 lg:items-center">
              <div className="max-w-7xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase leading-[0.92] text-[#f3d27d]">
                 Run Like A Girl 5K 10K 10-Mile
                </h1>
              
                <p className="mt-3 text-2xl font-semibold text-[#f3d27d] sm:text-4xl">
                  Westerville, Ohio | 10/04/2026
                </p>
                <p className="mt-5 max-w-4xl text-lg leading-9 text-white/95 sm:text-2xl sm:leading-[1.3]">
                  Join us for an empowering all-women’s running event that unites the Central Ohio
                  running community. With options for a 5K, 10K, and 10-Mile, there’s something for
                  everyone, from elite runners to weekend warriors and first-timers.
                </p>
                <div className="mt-7">
                  <Link
                    href="https://runsignup.com/Race/OH/Westerville/RunLikeAGirl5KAnd10K"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-10 py-4 text-md md:text-xl font-black uppercase tracking-[0.05em] text-[#f7d96f] shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition hover:brightness-110"
                  >
                    Click Here To Register
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-[#83a73d]">
                <video
                  className="min-h-[240px] w-full object-cover md:min-h-[480px]"
                  src="/120683-721759770_medium.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
                <div className="pointer-events-none absolute bottom-3 right-3 rounded-xl border border-white/20 bg-black/35 p-2">
                  <Image
                    src="/new/Run-Like-a-Girl-04-cropped.avif"
                    alt="Run Like A Girl logo"
                    width={80}
                    height={80}
                    className="h-10 w-auto object-contain sm:h-12"
                  />
                </div>

                {/* <Image
                  src="https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg"
                  alt="Women runners smiling"
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>
        </section>

        <section id="swag" className="mt-4  bg-[#212831]">
          <div className="container mx-auto grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Finisher Swag",
                body: "Receive a beautiful running shirt and a custom medal with a ribbon.",
              },
              {
                title: "Solidarity & Support",
                body: "An environment to support each other and celebrate your achievements.",
              },
              {
                title: "Non-Profit Partner",
                body: "Your participation helps a local non-profit. Proceeds benefit a great cause.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/12 bg-white/5 p-4">
                <h3 className="text-2xl font-black uppercase text-white">{item.title}</h3>
                <p className="mt-2 text-xl leading-8 text-white/90">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mt-5 bg-[#1d232b] px-4 py-6 sm:px-8">
          <div className="container mx-auto grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                Featured Event Details
              </h2>
              <ul className="mt-5 space-y-4 text-xl leading-tight text-white/95 sm:text-xl">
                <li>
                  <span className="font-semibold">Choose your challenge:</span> Distances are 5K, 10K,
                  and 10-Mile.
                </li>
                <li>
                  <span className="font-semibold">Empowerment:</span> Create shared experiences and find
                  inspiration.
                </li>
                <li>
                  <span className="font-semibold">Proceeds Benefit:</span> Participation raises awareness
                  and funds for a local charity.
                </li>
              </ul>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg"
                alt="Women at finish line"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* <section id="packet-pickup" className="mt-5 bg-[#212831] px-4 py-6 sm:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                testimonials[0],
                testimonials[1],
                testimonials[2],
              ].map((item) => (
                <article
                  key={item.name}
                  className="grid gap-4 rounded-2xl border border-white/12 bg-white/5 p-4 sm:grid-cols-[96px_1fr]"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/20">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-1 text-[#f3d27d]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <p className="text-2xl leading-[1.2] text-white/95">&ldquo;{item.message}&rdquo;</p>
                    <p className="mt-2 text-2xl font-semibold text-white">- {item.name}</p>
                  </div>
                </article>
              ))}
            </div>
            </div>
        </section> */}

        <section id="projects" className="mt-0 bg-[#1e252d] px-4 py-6 sm:px-8 sm:py-12">
          <div className="container mx-auto grid gap-6 lg:grid-cols-[0.5fr_1fr]">
            <div className="relative min-h-[250px] overflow-hidden rounded-3xl border border-white/15">
              <Image
                src="/photo.png"
                alt="Event director"
                fill
                className="object-cover"
              />
            </div>
            <div>
                <h3 className="md:text-4xl font-black uppercase leading-none text-[#f3d27d] text-2xl">
                A Message From Our Event Director
              </h3>
              <p className="mt-4 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
                On behalf of the running and fitness community of Central Ohio, we are proud to
                present an all-female program created to inspire and empower women of all ages and
                fitness levels.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
                Our mission is to help women achieve their fitness goals in a fun, supportive, and
                motivating environment.
              </p>
              <p className="mt-3 max-w-6xl text-xl leading-8 text-white/95 sm:text-xl sm:leading-[1.3]">
                Whether you&apos;re a first-time participant or a seasoned runner, this program offers
                the perfect opportunity to train, connect, and grow. It&apos;s also an excellent
                preparation for fall marathons and other distance events.
              </p>
              <p className="mt-5 text-xl text-white sm:text-xl">Jeff Sheard - Race Director</p>
              <div className="mt-6">
                <Link
                  href="https://runsignup.com/Race/OH/Westerville/RunLikeAGirl5KAnd10K"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-[#1f7f56] bg-[#1c9a64] px-8 py-3 text-xl font-black uppercase tracking-[0.05em] text-[#f7d96f] transition hover:brightness-110"
                >
                  Click Here To Register
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="mt-5">
          <div className="container mx-auto px-3">
            <div className="flex flex-col gap-4 border-b border-white/15 py-8 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-xl border border-white/20">
                <Image
                  src="/new/Run-Like-a-Girl-04.avif"
                  alt="Run Like A Girl logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div id="contact">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  Westerville Athletic Complex
                </h3>
                <p className="mt-1 max-w-7xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8 lg:text-2xl">
                  325 N. Cleveland Ave, Westerville, OH 43081 | Race starts at 9:00 am on
                  10/04/2026.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <SiteFooter />
      </div>
    </main>
  );
}
