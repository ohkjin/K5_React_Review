import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Logout from "./Logout";
import { stLogin } from "./StAtom";
import { useRecoilState } from "recoil";

const Login = () => {
    const [user,setUser]=useState();
    const [isLogin,setIsLogin] = useRecoilState(stLogin);

    const handleLogin =(userInput)=>{
        localStorage.setItem('user',userInput);
        setUser(userInput);
        setIsLogin(true);
    }
    const handleLogout =(userInput)=>{
        localStorage.removeItem('user',userInput);
        setUser("");
        setIsLogin(false);
    }
    useEffect(()=>{
        const tmUser = localStorage.getItem('user');
        if(tmUser) {
          setUser(tmUser); // local 변수에 있는것을 상태변수에
          setIsLogin(true);
        }else{
          setIsLogin(false);
        }
        
    },[])
  return (
    <section className="h-full flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
        {user?<Logout user={user} onLogout={handleLogout}/>:<LoginForm onLogin={handleLogin}/>}
    </section>
  );
};

export default Login;
//from https://medium.com/@ryaddev/building-a-login-component-with-react-tailwind-css-and-react-icons-12cdcb26ed27