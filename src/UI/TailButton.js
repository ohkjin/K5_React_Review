import React from 'react'

export default function TailButton({text,theme, onClick}) {
    return (
        <div>
            <button
            onClick={onClick}
            className={`mt-4 bg-${theme}-600 hover:bg-${theme}-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider`}
            >
                {text}
            </button>
        </div>
    )
}
