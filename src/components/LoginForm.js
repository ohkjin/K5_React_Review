import React, { useRef } from 'react'
import TailButton from '../UI/TailButton'

export default function LoginForm({onLogin}) {
    const mailRef = useRef();
    const passRef = useRef();
        
    const handleSignIn=(e)=>{
        e.preventDefault();
        if(mailRef.current.value==='') {
            alert('Please input email');
            mailRef.current.focus();
            return;
        }
        if(passRef.current.value==='') {
            alert('Please input password');
            passRef.current.focus();
            return;
        }

        if(mailRef.current.value !== 'dustofjade@gmail.com') {
            alert('Wrong email or password');
            mailRef.current.focus();
            return;
        }

        if(passRef.current.value!=='qwer') {
            alert('Wrong email or password');
            mailRef.current.focus();
            return;
        }

        onLogin(mailRef.current.value)
    }
    return (        
        <div className="md:w-1/3 max-w-sm">
            <div className="text-center md:text-left">
                <label className="mr-1">Sign in with</label>
                <button
                    type="button"
                    className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                    {/* icon */}
                </button>
                <button
                    type="button"
                    className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
                >
                    {/* icon */}
                </button>
            </div>
            <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                    Or
                </p>
            </div>

            <div>
                <input
                    ref = {mailRef}
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    ref = {passRef}
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Password"
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <a
                        className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                        href="#"
                    >
                        Forgot Password?
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <TailButton text={'Login'} theme={'blue'} onClick={handleSignIn}/>
                </div>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Don&apos;t have an account?{" "}
                <a
                    className="text-red-600 hover:underline hover:underline-offset-4"
                    href="#"
                >
                    Register
                </a>
            </div>
        </div>

    )
}
