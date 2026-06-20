import { useEffect } from "react"
import gsap from "gsap"
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp} from 'react-icons/fa';

export default function Contact() {
  useEffect(() => {
    gsap.from(".contact-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    })
  }, [])

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-40 pb-20 px-6 md:px-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        
        {/* LEFT SIDE: Reference Style Text */}
        <div className="space-y-12">
          <div>
            {/* <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
              Get In Touch
            </p> */}
            <h2 className="text-7xl md:text-8xl font-serif italic tracking-tighter leading-[0.9]">
              Stay <br />
              <span className="text-[#00df9a]">Updated</span>
            </h2>
          </div>

          <div className="space-y-6 text-zinc-400 font-light tracking-wide">
            <p className="flex flex-col">
              <span className="text-white text-xs uppercase tracking-widest mb-1 font-bold">Location</span>
              Lotus Production, 
39/2475-B1, Suite i92,  
LR Towers, SJRRA 104, 
South Janatha Road, Palarivattom, 
Kochi, Kerala 682025
            </p>
            <p className="flex flex-col">
              <span className="text-white text-xs uppercase tracking-widest mb-1 font-bold">Direct Line</span>
              +91 94960 57855
            </p>
            <p className="flex flex-col underline decoration-[#00df9a]/30">
              <span className="text-white text-xs uppercase tracking-widest mb-1 font-bold">Email</span>
             lotuspro.in@gmail.com
            </p>
          </div>

          <div>
             <label className="text-white text-[10px] font-black uppercase tracking-[0.2em] block mb-6">Follow Us</label>
            <div className="flex gap-6">
    {[
      { icon: <FaFacebookF />, link: "https://facebook.com/yourprofile" },
      { icon: <FaYoutube />, link: "https://www.youtube.com/channel/UCPgpIrCnSM_wYQYtj6rY95A" },
      { icon: <FaInstagram />, link: "https://www.instagram.com/lotuspro.in?igsh=MW54NHM4ajRiZ2EyYw%3D%3D&utm_source=qr" },
      { icon: <FaWhatsapp />, link: "https://wa.me/+919496057855" },
    ].map((social, index) => (
      <a
        key={index}
        href={social.link}
        target="_blank" // Opens in new tab
        rel="noopener noreferrer" // Security best practice
        className="text-zinc-500 hover:text-[#00df9a] hover:-translate-y-1 transition-all duration-300 text-xl"
      >
        {social.icon}
      </a>
    ))}
  </div>
        </div>
        </div>

        {/* RIGHT SIDE: Reference Style Form */}
        <div className="flex flex-col space-y-12">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative">
              <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Name *</label>
              <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all" />
            </div>
            <div className="relative">
              <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Email address *</label>
              <input type="email" className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all" />
            </div>
          </div>

          <div className="relative">
            <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Subject *</label>
            <input type="text" className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all" />
          </div>

          <div className="relative">
            <label className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Message *</label>
            <textarea rows="4" className="w-full bg-transparent border-b border-zinc-800 py-4 outline-none focus:border-[#00df9a] transition-all resize-none"></textarea>
          </div>

          <button className="self-start px-12 py-4 border border-white rounded-full text-white font-bold uppercase tracking-widest text-[10px] hover:bg-[#00df9a] hover:text-black transition-all duration-500">
            Send Message
          </button>
        </div>

      </div>
    </main>
  )
}