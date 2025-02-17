export default function CardPlaceholder() {
  return (
    <div className='w-full h-full lg:w-[282px] lg:h-[512px] bg-neutral-900 rounded-xl overflow-hidden pt-2 pb-4 px-2'>
      <div className='relative lg:w-[266px] lg:h-[400px] rounded-lg overflow-hidden mb-4'>
        <div className='w-full h-full bg-neutral-800'></div>
        <div className='absolute top-1 left-1 w-12 h-8 flex items-center gap-x-1 bg-black/20 rounded-lg overflow-hidden py-1 px-2'>
        </div>
      </div>
      <div className='animate-pulse p-2'>
        <span className="w-[150px] h-4 bg-neutral-800 rounded-lg"></span>
      </div>
    </div>
  )
}