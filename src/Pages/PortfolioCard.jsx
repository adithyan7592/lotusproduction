import { useState } from "react"
import VideoModal from "./VideoModal"

export default function PortfolioCard({ image, video, title }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative group cursor-pointer overflow-hidden rounded-xl"
      >
        <img src={image} className="h-64 w-full object-cover group-hover:scale-110 transition" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100">
          ▶
        </div>
        <h3 className="absolute bottom-4 left-4">{title}</h3>
      </div>

      {open && <VideoModal video={video} close={() => setOpen(false)} />}
    </>
  )
}
