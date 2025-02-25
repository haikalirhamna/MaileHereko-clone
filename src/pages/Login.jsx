import { useState } from "react";
import { Link } from "react-router-dom";
import BaseInput from "../components/UI/BaseInput";
import BaseButton from "../components/UI/BaseButton";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  return (
    <>
      <div className="w-full h-full min-h-screen grid grid-cols-2 items-center my-6 lg:my-14">
        <div className="relative hidden lg:block w-[486px] h-[584px]">
          <div className="w-96 h-[560px] bg-neutral-900 rounded-4xl"></div>
          <img src="/icons/saly-11.svg" alt="icon" className="absolute bottom-0 w-full h-full" />
        </div>
        <div className="w-full h-full max-w-[486px] flex flex-col justify-center col-span-2 lg:col-span-1 mx-auto">
          <h1 className="text-neutral-100 text-6xl font-semibold mb-10">Login</h1>
          <form className="flex flex-col items-center gap-4 mb-10 w-full">
            <div className="w-full">
              <BaseInput 
                index="email" 
                value={credentials.email} 
                setValue={(value) => setCredentials(prev => ({...prev, email: value}))} 
                leftIcon={<img src="/icons/sms.svg" alt="email icon" className="w-6 h-full" />}
              />
            </div>
            <div className="w-full">
              <BaseInput 
                index="password"
                name="password" 
                value={credentials.password} 
                setValue={(value) => setCredentials(prev => ({...prev, password: value}))} 
                type="password"
                leftIcon={<img src="/icons/key-square.svg" alt="key icon" className="w-6 h-full"/>} 
              />
            </div>
            <span className="w-full text-base text-neutral-50 font-semibold text-start ps-5">Don&apos;t have Account? <Link to={'/register'}>Register</Link></span>
            <div className="w-full mt-9">
              <BaseButton title="Login" onClick={() => alert('This feature is not available yet. Stay tuned for updates!')} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}