import { useEffect } from "react"
import gsap from "gsap"

export default function About() {
  useEffect(() => {
    gsap.from(".about-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, [])

  return (
    <main className="bg-[#050505] min-h-screen text-white flex flex-col items-center pt-32 pb-20 px-6">
    
      <div className="max-w-4xl w-full text-center mb-20">
        <h2 className="text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
          About <span className="text-[#00df9a]">Us</span>
        </h2>
        <p className="mt-4 text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold">
          Lotus Production / Cinematic Excellence / Since 2023
        </p>
      </div>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-20 items-start">
        
        <div className=" space-y-10">
          <div className="relative">
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">The Vision</label>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-300">
            We bring stories to life <span className="text-[#00df9a]">Stories that define brands.</span>
            </p>
          </div>
          
          <div className="relative">
            <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">Our Expertise</label>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3 border-b border-zinc-800 pb-2">
                <span className="text-[#00df9a]">01.</span> Drone Cinematography
              </li>
              <li className="flex items-center gap-3 border-b border-zinc-800 pb-2">
                <span className="text-[#00df9a]">02.</span> Corporate Production
              </li>
              <li className="flex items-center gap-3 border-b border-zinc-800 pb-2">
                <span className="text-[#00df9a]">03.</span> Event Highlights
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex flex-col space-y-12">
          <div className="p-8 border border-zinc-800 bg-zinc-900/30 rounded-sm">
             <label className="text-[#00df9a] text-[10px] font-black uppercase tracking-[0.2em] mb-6 block">Production Stats</label>
             <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-black text-white">50+</h4>
                  <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Projects</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-white">100%</h4>
                  <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Quality</p>
                </div>
             </div>
          </div>
          
          <div className="pt-4">
             <p className="text-zinc-500 text-sm leading-loose">
               Based in Kerala, Lotus Production was founded to bridge the gap between technical skill and creative vision. Our team uses state-of-the-art equipment to ensure every project meets international standards.
             </p>
          </div>
        </div>

      </div>
    </main>
  )
}