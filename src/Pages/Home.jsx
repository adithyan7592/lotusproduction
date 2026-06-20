import { useEffect } from "react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import PortfolioCard from "../components/PortfolioCard"
import { fadeUp } from "../animations/gsap"
import dummyGif from "../dummy.gif"

export default function Home() {
  useEffect(() => {
    gsap.from(".hero-fade", {
      y: 30,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      delay: 0.2
    })

    const timer = setTimeout(() => {
      fadeUp(".fade-up")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#050505] text-white">

      {/* ============================================================
          HERO — Fullscreen Background Video (like TANK reference)
          Replace "/hero-reel.mp4" with your actual video in /public/
      ============================================================ */}
      <section className="relative h-screen flex items-end justify-start overflow-hidden">

        {/* Background Video */}
       <img
  className="absolute inset-0 w-full h-full object-cover z-0"
  src={dummyGif}
  alt=""
/>

        {/* Dark overlay — mimics TANK reference darkening */}
        <div className="absolute inset-0 bg-black/55 z-10" />

        {/* Bottom-left content block — TANK style */}
        <div className="relative z-20 px-10 md:px-20 pb-16 w-full">

          {/* Category label */}
          {/* <p className=" text-xs uppercase tracking-[0.4em] font-bold mb-4">
            Cinematography
          </p> */}
               <p className=" text-s text-[#00df9a]  uppercase tracking-[0.4em] font-bold mb-4">
            The<span className="text-white"> Liminal</span> 
          </p>

          {/* Big title */}
          <h1 className="text-4xl md:text-7xl font-serif italic tracking-tight text-white leading-none mb-10">
            LOTUS <span className="text-[#00df9a]">PRODUCTION</span>
        
          </h1>

          {/* Meta row — Client / Year / Role / Website — exactly like TANK */}
          <div className="flex flex-wrap gap-0 text-sm text-white/70">
            {/* <div className="pr-8 border-r border-white/20 mr-8">
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Based In</p>
              <p className="text-white font-medium">India</p>
              
            </div> */}
            {/* <div className="pr-8 border-r border-white/20 mr-8">
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Est.</p>
              <p className="text-white font-medium">2023</p>
            </div> */}
            {/* <div className="pr-8 border-r border-white/20 mr-8">
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Specialty</p>
              <p className="text-white font-medium">Drone & Events</p>
            </div> */}
            {/* <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Contact</p>
              <Link to="/contact" className="text-[#00df9a] font-medium hover:underline">
                Get In Touch ↗
              </Link>
            </div> */}
          </div>
        </div>

        {/* Scroll Down hint — bottom right */}
        <div className="absolute bottom-8 right-10 z-20 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white rotate-90 mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ============================================================
          PORTFOLIO GRID
      ============================================================ */}
      <section className="py-16 md:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col items-center mb-20 text-center fade-up">
            <h2 className="text-4xl font-bold tracking-tight uppercase font-serif italic">Selected Works</h2>
            <div className="h-[2px] w-24 bg-[#00df9a] mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Replace image/video with actual paths from your /public folder */}
            <PortfolioCard title="Factory Shoots" image="/thumbs/Factory.jpg" video="/videos/factory.mp4" />
            <PortfolioCard title="Corporate Events" image="/thumbs/Corporate.jpg" video="/videos/corporate.mp4" />
            <PortfolioCard title="Drone Shoots" image="/thumbs/Droneshots.jpg" video="/videos/drone.mp4" />
            <PortfolioCard title="Showroom Facilities" image="/thumbs/Showroom.jpg" video="/videos/showroom.mp4" />
            <PortfolioCard title="Ayurvedha Wellness" image="/thumbs/Amruthika.jpg" video="/videos/amruthika.mp4" />
            <PortfolioCard title="Restaurant" image="/thumbs/Restaurant.jpg" video="/videos/restaurant.mp4" />
            
          </div>
        </div>
      </section>
      <section className="bg-zinc-950 py-16 md:py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
    <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
  <img 
    src="/thumbs/Featured.jpg" 
    alt="Featured Reel"
    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
  />
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-2xl backdrop-blur-sm">
      ▶
    </div>
  </div>
</div>

          <div className="fade-up">
            <h3 className="text-4xl font-bold mb-6 italic tracking-tight uppercase">
              New Year At Beach
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              A cinematic journey through the 2026 festivities. High-speed captures and drone perspectives deliver an unforgettable event highlight.
            </p>
            <ul className="space-y-4 text-gray-300 text-[10px] uppercase tracking-[0.2em] font-bold">
              <li className="flex items-center gap-4"><span className="text-[#00df9a]">LOC</span> Sydney Beach</li>
              <li className="flex items-center gap-4"><span className="text-[#00df9a]">EVT</span> New Year Event</li>
              <li className="flex items-center gap-4"><span className="text-[#00df9a]">CLT</span> CitySurf Company</li>
            </ul>
          </div>
        </div>
      </section>

  {/* SERVICES STRIP */}
<section className="py-16 border-b border-white/5">
  <div className="max-w-7xl mx-auto px-8">

    {/* Heading */}
    <div className="mb-12">
      <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.5em] font-bold mb-3">What We Do</p>
      <h2 className="text-4xl md:text-5xl font-serif italic">Our Services</h2>
    </div>


    {/* Service Cards */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { num: "01", title: "Drone Cinematography", desc: "Aerial perspectives that tell stories from above." },
        { num: "02", title: "Corporate Production", desc: "Professional brand films and event documentation." },
        { num: "03", title: "Event Highlights", desc: "Capturing moments that last a lifetime." },
        { num: "04", title: "Post Production", desc: "Color grading and editing to cinematic standards." },
      ].map((s) => (
        <div
          key={s.num}
          className="border-t border-zinc-800 pt-6 group hover:border-[#00df9a] transition-all duration-300 cursor-pointer"
        >
          <span className="text-[#00df9a] text-xs font-black">{s.num}</span>
          <h4 className="text-sm  uppercase tracking-wide mt-3 mb-3 group-hover:text-[#00df9a] transition-colors duration-300 font-serif italic">
            {s.title}
          </h4>
          <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
          <span className="text-[10px] uppercase tracking-widest text-[#00df9a] mt-4 opacity-0 group-hover:opacity-100 block transition-all duration-300">
            Learn More →
          </span>
        </div>
      ))}
    </div>

    {/* View All Button */}
    <div className="mt-12 text-center">
      <Link to="/services">
        <button className="px-10 py-3 border border-[#00df9a] text-[#00df9a] uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#00df9a] hover:text-black transition-all duration-500">
          View All Services
        </button>
      </Link>
    </div>

  </div>
</section>

      {/* ============================================================
          CTA — Closing Scene
      ============================================================ */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative fade-up z-10 px-6">
          <p className="uppercase tracking-[0.4em] text-[#00df9a] text-xs mb-6 font-bold">
            Hire Our Studio
          </p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase italic max-w-4xl leading-none">
            We Are Always Ready To Take A Perfect Shot
          </h2>
          <Link to="/contact">
            <button className="mt-12 px-12 py-4 border border-[#00df9a] text-[#00df9a] uppercase text-xs tracking-[0.3em] font-bold hover:bg-[#00df9a] hover:text-black transition-all duration-700">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>

    </main>
  )
}