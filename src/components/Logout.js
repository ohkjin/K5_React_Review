import React from 'react'
import TailButton from '../UI/TailButton'

export default function Logout({user,onLogout}) {
    return (
        
            <div className="md:w-1/3 max-w-sm">
                <div className='font-bold text-xl'>Welcome</div>
                <div>님 반갑습니다</div>
                <div className="text-center md:text-left">
                    <TailButton text={'Logout'} theme={'blue'} onClick={onLogout}/>
                </div>
            </div>
        
    )
}
