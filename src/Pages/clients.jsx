import { useEffect } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { fadeUp } from "../animations/gsap"

const productionGoals = [
  {
    num: "01",
    title: "Promote a Brand",
    description:
      "For businesses that need a brand film, campaign video, homepage visual, corporate story, or premium introduction video.",
    bestFor: "Brands, startups, institutions",
    outputs: ["Brand film", "Hero video", "Ad cuts"],
  },
  {
    num: "02",
    title: "Cover an Event",
    description:
      "For launches, openings, award nights, exhibitions, showroom events, public programs, and private brand moments.",
    bestFor: "Any live event or gathering",
    outputs: ["Aftermovie", "Highlights", "Reels"],
  },
  {
    num: "03",
    title: "Show a Place",
    description:
      "For showrooms, malls, factories, offices, resorts, real estate spaces, facilities, and business locations.",
    bestFor: "Spaces, facilities, properties",
    outputs: ["Walkthrough", "Drone visuals", "Photo set"],
  },
  {
    num: "04",
    title: "Launch a Product",
    description:
      "For product introductions, commercial visuals, demo videos, social media campaigns, and sales-focused content.",
    bestFor: "Products, services, campaigns",
    outputs: ["Product film", "Demo video", "Short ads"],
  },
  {
    num: "05",
    title: "Build Social Content",
    description:
      "For brands that need regular vertical videos, reels, short edits, motion graphics, and campaign content packs.",
    bestFor: "Instagram, YouTube, ads",
    outputs: ["Reels", "Shorts", "Motion edits"],
  },
  {
    num: "06",
    title: "Custom Production",
    description:
      "If your requirement does not fit a listed category, we plan the shoot around your exact goal, location, audience, and deadline.",
    bestFor: "Unique shoot requirements",
    outputs: ["Shoot plan", "Custom crew", "Final assets"],
  },
]

const process = [
  {
    step: "01",
    title: "Tell us the goal",
    text: "You do not need to know the exact production type. Just tell us what the video should achieve.",
  },
  {
    step: "02",
    title: "We design the plan",
    text: "We suggest the shoot format, crew, visuals, duration, deliverables, and production approach.",
  },
  {
    step: "03",
    title: "Production day",
    text: "We capture the required footage with a clean, cinematic, and brand-safe production workflow.",
  },
  {
    step: "04",
    title: "Edit and delivery",
    text: "You receive polished videos, reels, photos, or campaign assets based on the agreed delivery plan.",
  },
]

const questions = [
  "What do you want the audience to feel or do?",
  "Where will the final video be used?",
  "Is there a date, venue, product, or person involved?",
  "Do you need one film or multiple short edits?",
]

export default function Clients() {
  useEffect(() => {
    gsap.from(".planner-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
    })

    const timer = setTimeout(() => {
      fadeUp(".fade-up")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pb-24 pt-36 text-white md:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(0,223,154,0.14),transparent_32%),radial-gradient(circle_at_12%_35%,rgba(255,255,255,0.05),transparent_26%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#00df9a]/40 via-white/5 to-transparent md:left-20" />

      <div className="relative mx-auto max-w-7xl">
        <section className="mb-20 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-[#00df9a]">
              Production Guide
            </p>
            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-none tracking-tighter md:text-8xl">
              Not sure what to shoot? <span className="text-[#00df9a]">Start here.</span>
            </h1>
            <div className="mt-6 h-[2px] w-20 bg-[#00df9a]" />
          </div>

          <div className="lg:col-span-4 lg:justify-self-end">
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              This page is for visitors who do not know the exact production category. Choose the goal, and Lotus Production will shape the right shoot plan around it.
            </p>
          </div>
        </section>

        <section className=" mb-16 border border-zinc-800 bg-zinc-950/40 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">
                Why this page exists
              </p>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter md:text-5xl">
                We plan by <span className="text-[#00df9a]">purpose</span>, not only by event name.
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400 lg:col-span-5">
              A client may not see their exact event type in a list. That should not make them feel Lotus cannot do it. This guide makes it clear that openings, launches, corporate programs, product shoots, facility videos, personal brand shoots, and custom requirements can all be planned under one production system.
            </p>
          </div>
        </section>

        <section className="fade-up mb-24">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                Choose your goal
              </p>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter md:text-5xl">
                What do you need the content to do?
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              These are not fixed packages. They are starting points to understand your requirement faster.
            </p>
          </div>

          <div className="grid gap-px bg-zinc-800 md:grid-cols-2 xl:grid-cols-3">
            {productionGoals.map((goal) => (
              <article
                key={goal.title}
                className="group min-h-[360px] bg-[#050505] p-8 transition-colors duration-500 hover:bg-zinc-950"
              >
                <div className="mb-10 flex items-start justify-between">
                  <span className="text-xs font-black text-[#00df9a]">{goal.num}</span>
                  <span className="h-10 w-10 rounded-full border border-zinc-800 transition-all duration-500 group-hover:border-[#00df9a]/50 group-hover:shadow-[0_0_30px_rgba(0,223,154,0.18)]" />
                </div>

                <h3 className="mb-5 text-2xl font-black uppercase italic tracking-tight transition-colors duration-300 group-hover:text-[#00df9a]">
                  {goal.title}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-zinc-400">
                  {goal.description}
                </p>

                <div className="mb-7 border-t border-zinc-800 pt-5">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
                    Best for
                  </p>
                  <p className="text-sm text-zinc-300">{goal.bestFor}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {goal.outputs.map((output) => (
                    <span
                      key={output}
                      className="border border-zinc-800 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500 transition-all duration-300 group-hover:border-[#00df9a]/30 group-hover:text-[#00df9a]/70"
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fade-up mb-24 grid gap-8 lg:grid-cols-12">
          <div className="border border-[#00df9a]/30 bg-[#00df9a]/5 p-8 md:p-10 lg:col-span-5">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.4em] text-[#00df9a]">
              Not listed?
            </p>
            <h2 className="mb-6 text-3xl font-black uppercase italic tracking-tighter md:text-5xl">
              We still can plan it.
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-zinc-300">
              If your shoot type is not shown, the next step is not to leave the site. Send the requirement. We will convert it into a production plan.
            </p>
            <Link to="/contact">
              <button className="border border-[#00df9a] px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df9a] transition-all duration-700 hover:bg-[#00df9a] hover:text-black">
                Send Requirement
              </button>
            </Link>
          </div>

          <div className="border border-zinc-800 p-8 md:p-10 lg:col-span-7">
            <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
              Useful details before contacting
            </p>

            <div className="grid gap-px bg-zinc-800 md:grid-cols-2">
              {questions.map((question, index) => (
                <div key={question} className="bg-[#050505] p-6">
                  <span className="mb-6 block text-[10px] font-black text-[#00df9a]">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-300">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="fade-up mb-24">
          <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
            How we move from idea to output
          </p>

          <div className="grid gap-px bg-zinc-800 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="bg-[#050505] p-7">
                <span className="mb-8 block text-xs font-black text-[#00df9a]">
                  {item.step}
                </span>
                <h3 className="mb-4 text-lg font-black uppercase italic tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="fade-up text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-500">
            Have a shoot in mind?
          </p>
          <h2 className="mx-auto mb-10 max-w-4xl text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
            Tell us the purpose. We will suggest the production.
          </h2>
          <Link to="/contact">
            <button className="border border-[#00df9a] px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] text-[#00df9a] transition-all duration-700 hover:bg-[#00df9a] hover:text-black">
              Plan My Shoot
            </button>
          </Link>
        </section>
      </div>
    </main>
  )
}

