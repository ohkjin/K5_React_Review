import React from 'react'
import video from '../assets/homevideo.mp4'
import cat from '../assets/cat.jpg'
export default function Home() {
    return (
        <div className="relative">
           
            {/* <div className="background-video fixed w-100 h-100 overflow-hidden"> */}
                {/* <video src={video} muted autoPlay loop type="homevideo/mp4"
                       className='object-cover translate-x-50 opacity-50'></video> */}
            <div className='bg-cover' style={{backgroundImage: `url(${cat})`}}>
                <div className='absolute -z-10 bg-gradient-to-t from-blue-400 via-blue-100 to-rose-300  opacity-50 h-[70vh] lg:h-[80vh] w-full'></div>
            </div>
        </div>
    )
}
