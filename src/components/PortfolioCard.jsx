import { useState } from "react"
import VideoModal from "./VideoModel"

export default function PortfolioCard({ title }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer overflow-hidden rounded-xl bg-zinc-800 h-64"
      >
        {/* Fake thumbnail (no image error) */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900" />

        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl">
            ▶
          </div>
        </div>

        {/* Title */}
        <h3 className="absolute bottom-4 left-4 text-lg font-medium">
          {title}
        </h3>
      </div>

      {open && (
        <VideoModal
          video=""
          close={() => setOpen(false)}
        />
      )}
    </>
  )
}
