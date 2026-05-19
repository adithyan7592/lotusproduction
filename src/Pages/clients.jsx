import React from 'react';
import Forum from "../assets/Forum.png"
import lexux from "../assets/lexux.png"
import Muthoot from "../assets/Muthoot.png"

const Clients = () => {
  const clients = [
    {
      name: "Forum Mall",
      logo: { src: Forum, alt: "Forum Mall Logo" }, // Replace with your actual logo paths
      description: "Directed three high-budget music videos for their upcoming indie artists.",
      project: "Music Videos"
    },
    {
      name: "Lexus Motors",
      logo: { src: lexux, alt: "Lexux Motors Logo" },
      description: "Full event coverage and cinematic after-movies for international tech summits.",
      project: "Event Coverage"
    },
    {
      name: "Muthoot Finance",
      logo: { src: Muthoot, alt: "Muthoot Finance Logo" },
      description: "Post-production and color grading for the award-winning short film 'Silence'.",
      project: "Post-Production"
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 mt-4">
          {/* <h2 className="text-[#00df9a] uppercase tracking-[0.3em] text-sm font-bold mb-2">Partners</h2> */}
          <h1 className="text-2xl text-center md:text-7xl font-black italic uppercase tracking-tighter">
            Our <span className="text-[#00df9a]">Clients</span>
          </h1>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 gap-12">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group flex flex-col md:flex-row items-center gap-8 py-12 border-b border-zinc-800 hover:border-[#00df9a] transition-all duration-500"
            >
              {/* Logo Container */}
              <div className="w-40 h-40 flex-shrink-0 bg-zinc-900 rounded-full flex items-center justify-center p-8 grayscale group-hover:grayscale-0 group-hover:bg-zinc-800 transition-all duration-500">
                <img src={client.logo.src} alt={client.name} className="max-w-full h-auto opacity-70 group-hover:opacity-100" />
              </div>

              {/* Text Details */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-3xl font-black uppercase italic tracking-tight">{client.name}</h3>
                  <span className="hidden md:block text-[#00df9a]">/</span>
                  <span className="text-[#00df9a] uppercase tracking-widest text-xs font-bold">{client.project}</span>
                </div>
                <p className="text-zinc-400 text-lg md:max-w-2xl leading-relaxed font-light">
                  {client.description}
                </p>
              </div>

              {/* View Project Arrow (Optional) */}
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00df9a" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;