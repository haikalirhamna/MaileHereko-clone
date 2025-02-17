export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center py-6 lg:py-24 px-auto">
      <h3 className="text-neutral-50 text-5xl font-semibold mb-4">Sorry, No results found</h3>
      <p className="text-neutral-400 text-xl mb-4 lg:mb-10">There are no movies or TV shows matching your search terms. You can suggest me manually</p>
    </div>
  )
}