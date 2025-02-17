import { useState } from "react";
import BaseInput from "../components/UI/BaseInput";
import BaseButton from "../components/UI/BaseButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert("Login feature is not available yet");
    }
  };

  return (
    <div className="w-full h-full grid grid-cols-2 items-center my-6 lg:my-14">
      <div className="relative hidden lg:block w-[486px] h-[584px]">
        <div className="w-96 h-[560px] bg-neutral-900 rounded-4xl"></div>
        <img src="/icons/saly-11.svg" alt="icon" className="absolute bottom-0 w-full h-full" />
      </div>
      <div className="w-full h-full max-w-[486px] flex flex-col justify-center col-span-2 lg:col-span-1 mx-auto">
        <h1 className="text-neutral-100 text-6xl font-semibold mb-10">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 mb-10 w-full">
          <div className="w-full">
            <BaseInput 
              index="email" 
              value={email} 
              setValue={setEmail} 
              leftIcon={<img src="/icons/sms.svg" alt="email icon" className="w-6 h-full" />}
            />
          </div>
          <div className="w-full">
            <BaseInput 
              index="password"
              name="password" 
              value={password} 
              setValue={setPassword} 
              type={showPassword ? "text" : "password"} 
              leftIcon={<img src="/icons/key-square.svg" alt="key icon" className="w-6 h-full"/>} 
              rightIcon={
                <img 
                  src={showPassword ? "/icons/eye-slash.svg" : "/icons/eye.svg"} 
                  onClick={() => setShowPassword((prev) => !prev)} 
                  alt="toggle password visibility" 
                  className="w-6 h-full cursor-pointer"
                />
              } 
            />
          </div>
          <BaseButton title="Login" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}