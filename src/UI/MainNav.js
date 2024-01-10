import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { stLogin } from '../components/StAtom';

export default function MainNav() {
    const isLogin = useRecoilValue(stLogin);
    const handleLogout =()=>{

    }
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-slate-50 p-6">
                
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-black h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="" /></svg>
                    <span className="font-semibold text-xl tracking-tight text-black">K5-React-review</span>
                </div>
                {/* <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div> */}
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-white mr-4">
                            Home..
                        </Link>
                        <Link to="/subway" className="block mt-4 lg:inline-block lg:mt-0 text-blue-800 hover:text-white mr-4">
                            Subway Information
                        </Link>
                    </div>
                    <div>
                        
                        <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-400 border-blue-400 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
                        {isLogin?'Logout':'Login'}
                        </Link>
                        
                        {/* {isLogin==false?
                        <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-400 border-blue-400 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
                        Login
                        </Link>
                        :
                        <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-blue-400 border-blue-400 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                                onClick={handleLogout}>
                        Logout
                        </button>
                        } */}
                    </div>
                </div>
                
            </nav>
        </div>
    )
}
