import PropTypes from 'prop-types';

export default function BaseButton({disabled, title, onClick, leftIcon, rightIcon}) {
  return (
    <div onClick={onClick} 
      disabled={disabled}
      className='w-full h-14 flex items-center gap-x-2 bg-primary-400 hover:bg-primary-500 active:border active:border-primary-500 disabled:opacity-40 border-0 text-white text-base rounded-xl overflow-hidden py-4 px-8'>
      {leftIcon && (
        leftIcon
      )}
      <span className='w-full text-center'>{title}</span>
      {rightIcon && (
        rightIcon
      )}
    </div>
  )
}

BaseButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  disabled: PropTypes.bool,
}