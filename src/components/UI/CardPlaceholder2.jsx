export default function CardPlaceholder2() {
  return (
    <div className='w-[240px] sm:h-[408px] lg:w-[282px] lg:h-[480px] aspect-[0.5875] flex flex-col bg-neutral-900 rounded-xl overflow-hidden pt-2 pb-4 px-2'>
      <div className="relative w-full flex-1 rounded-lg overflow-hidden mb-4">
        <div className="absolute inset-0 bg-neutral-800"></div>
        <div className="absolute top-1 left-1 w-12 h-8 flex items-center gap-x-1 bg-black/20 rounded-lg overflow-hidden py-1 px-2"></div>
      </div>
      <div className="flex flex-col animate-pulse p-2">
        <span className="w-[150px] h-4 bg-neutral-800 rounded-lg mb-6"></span>
        <div className="flex items-center justify-start gap-x-2 mb-6">
          <span className="w-4 h-4 bg-neutral-800 rounded-full"></span>
          <span className="w-[150px] h-4 bg-neutral-800 rounded-lg"></span>
        </div>
      </div>
    </div>
  )
}