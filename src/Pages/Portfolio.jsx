import { useEffect } from "react"
import gsap from "gsap"
import { fadeUp } from "../animations/gsap"
import PortfolioCard from "../components/PortfolioCard"

const projects = [
  { id: 1, title: "Factory Shoots", category: "Industrial", year: "2025", image: "/thumbs/factory.jpg", video: "/videos/factory.mp4" },
  { id: 2, title: "Corporate Event", category: "Corporate", year: "2025", image: "/thumbs/Corporate.jpg", video: "/videos/corporate.mp4" },
  { id: 3, title: "Drone Shoots", category: "Aerial", year: "2024", image: "/thumbs/drone.jpg", video: "/videos/drone.mp4" },
  { id: 4, title: "Showroom Facilities", category: "Commercial", year: "2024", image: "/thumbs/showroom.jpg", video: "/videos/showroom.mp4" },
  { id: 5, title: "Amruthika", category: "Event", year: "2024", image: "/thumbs/amruthika.jpg", video: "/videos/amruthika.mp4" },
  { id: 6, title: "Gaming Video", category: "Digital", year: "2024", image: "/thumbs/gaming.jpg", video: "/videos/gaming.mp4" },
  { id: 7, title: "Forum Mall Opening", category: "Event", year: "2023", image: "/thumbs/forum.jpg", video: "/videos/forum.mp4" },
  { id: 8, title: "Lexus Launch", category: "Automotive", year: "2023", image: "/thumbs/lexus.jpg", video: "/videos/lexus.mp4" },
  { id: 9, title: "Muthoot Gala", category: "Corporate", year: "2023", image: "/thumbs/muthoot.jpg", video: "/videos/muthoot.mp4" },
]

export default function Portfolio() {
  useEffect(() => {
    gsap.from(".port-fade", {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    })

    const timer = setTimeout(() => {
      fadeUp(".fade-up")
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-[#050505] min-h-screen text-white pt-36 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-[#00df9a] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
            Our Work
          </p>
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
            Portfolio
          </h1>
          <div className="h-[2px] w-20 bg-[#00df9a] mt-6" />
        </div>

        {/* Stats Row */}
        <div className=" grid grid-cols-3 gap-8 mb-20 pb-12 border-b border-zinc-800">
          {[
            { num: "50+", label: "Projects Completed" },
            { num: "30+", label: "Happy Clients" },
            { num: "3+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-black text-[#00df9a]">{stat.num}</h3>
              <p className="text-[10px] uppercase text-zinc-500 tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10 fade-up">
          {projects.map((p) => (
            <div key={p.id} className="relative group">
              <PortfolioCard title={p.title} image={p.image} video={p.video} />
              <div className="mt-3 flex justify-between items-center px-1">
                <span className="text-zinc-500 text-[10px] uppercase tracking-widest">{p.category}</span>
                <span className="text-zinc-600 text-[10px]">{p.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  )
}
