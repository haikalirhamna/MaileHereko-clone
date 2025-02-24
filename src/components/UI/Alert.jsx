import PropTypes from 'prop-types';
import { BadgeCheck, TriangleAlert } from 'lucide-react';

export default function Alert({ value, onClose }) {
  return (
    <div onClick={() => onClose()} className="fixed inset-0 bg-neutral-900/45 flex justify-center items-center text-neutral-50 px-5">
      <div className="w-full h-auto max-w-xl flex flex-col justify-center items-center bg-neutral-900/80 backdrop-blur-2xl rounded-4xl py-6">
        {value.type === "error" ? <TriangleAlert size={56} className='text-error-500 mb-6'/> : <BadgeCheck size={56} className='text-success-500 mb-6'/>}
        <h3 className='text-3xl font-bold mb-4'>Status : {value.statusCode}</h3>
        <p className='text-xl font-semibold mb-8'>{value.message}</p>
      </div>
    </div>
  )
}

Alert.propTypes = {
  value: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    statusCode: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};