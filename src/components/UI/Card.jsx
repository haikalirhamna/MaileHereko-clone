import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

export default function Card({ title, image, rating }) {
  return (
    <div className='w-[240px] sm:h-[408px] lg:w-[282px] lg:h-[480px] aspect-[0.5875] flex flex-col cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:mx-2 bg-neutral-800/80 rounded-xl overflow-hidden pt-2 pb-4 px-2'>
      <div className='relative w-full flex-1 rounded-lg overflow-hidden transition-transform duration-300 ease-out group-hover:scale-100 mx-auto mb-4'>
        <img src={image} alt="image movie" className='w-full h-full object-cover' />
        <div className='absolute top-1 left-1 w-16 h-12 flex items-center gap-x-1 bg-black/65 rounded-lg overflow-hidden py-1 px-2'>
          <Star size={16} className='text-warning-400' />
          <span className='text-warning-400 truncate text-clip'>{rating}</span>
        </div>
      </div>
      <p className='text-white text-base text-nowrap text-ellipsis font-semibold overflow-hidden p-2 mx-auto'>{title}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.number
}