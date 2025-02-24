export default function Loading() {
  return (
    <div className="fixed z-50 inset-0 w-full h-full bg-black/65 flex justify-center items-center">
      <div className="flex gap-x-3">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce motion-reduce:animate-none [animation-duration:1.2s] [animation-delay:0s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce motion-reduce:animate-none [animation-duration:1.2s] [animation-delay:0.2s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce motion-reduce:animate-none [animation-duration:1.2s] [animation-delay:0.4s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce motion-reduce:animate-none [animation-duration:1.2s] [animation-delay:0.6s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce motion-reduce:animate-none [animation-duration:1.2s] [animation-delay:0.8s]"></span>
      </div>
    </div>
  );
}
