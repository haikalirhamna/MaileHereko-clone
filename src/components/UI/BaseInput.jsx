import PropTypes from 'prop-types';
import { useState } from 'react';

export default function BaseInput({index, title, type="text", value, setValue, leftIcon, rightIcon, onKeyDown}) {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full h-16 flex items-center gap-x-4 border border-neutral-700 rounded-xl overflow-hidden py-3 px-4">
      {leftIcon && (
          leftIcon
        )}
      <div className='relative w-full h-full'>
        <input type={type} 
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        onChange={handleChange}
        id={index} 
        name={index}
        value={value}
        onKeyDown={onKeyDown}
        className='w-full h-full border-0 outline-0 text-neutral-400 text-base' />
        <label
          htmlFor={index}
          className={`absolute left-0 transition-all duration-300 text-sm text-neutral-600 ${isFocused ? '-top-3' : 'top-2.5'}`}
        >
          {title}
        </label>
      </div>
      {
        rightIcon && (
          rightIcon
        )
      }
    </div>
  )
}

BaseInput.propTypes  = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onKeyDown: PropTypes.func
}