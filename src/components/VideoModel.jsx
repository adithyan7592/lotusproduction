export default function VideoModal({ video, close }) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <button
        onClick={close}
        className="absolute top-8 right-8 text-3xl"
      >
        ✕
      </button>

      <video
        src={video}
        controls
        autoPlay
        className="w-4/5 max-w-5xl rounded-xl"
      />
    </div>
  )
}

