export default function Loading() {
  return (
    <div className="absolute inset-0 w-full h-full bg-black/65">
      <div className="flex justify-center items-center gap-x-1.5">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span className="w-2 h-2 bg-white rounded-full"></span>
      </div>
    </div>
  )
}