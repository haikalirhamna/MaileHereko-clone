import PropTypes from 'prop-types';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function BaseInput({ index, title, type = "text", value, setValue, leftIcon, rightIcon, onKeyDown }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => setValue(e.target.value);
  const handleShowPassword = () => setShowPassword(prev => !prev);

  return (
    <div className="w-full h-16 flex items-center gap-x-4 border border-neutral-700 rounded-xl overflow-hidden py-3 px-4">
      {leftIcon && leftIcon}

      <div className="relative w-full h-full">
        <input 
          type={type === "password" && showPassword ? "text" : type} 
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(e.target.value !== "")}
          onChange={handleChange}
          id={index} 
          name={index}
          value={value}
          onKeyDown={onKeyDown}
          className="w-full h-full border-0 outline-0 text-neutral-400 text-base bg-transparent"
        />
        <label
          htmlFor={index}
          className={`absolute left-0 transition-all duration-300 text-sm text-neutral-600 ${isFocused ? '-top-3' : 'top-2.5'}`}
        >
          {title}
        </label>
      </div>

      {type === "password" ? (
        <button type="button" onClick={handleShowPassword} className="text-neutral-500">
          {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      ) : (
        rightIcon && rightIcon
      )}
    </div>
  );
}

BaseInput.propTypes = {
  index: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  onKeyDown: PropTypes.func
};