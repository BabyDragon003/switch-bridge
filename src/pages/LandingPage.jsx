import React, { useEffect, useRef, useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import { SquidWidget } from '@0xsquid/widget'
import { useNavigate } from 'react-router-dom'
import { ArrowIcon } from '../components/Icon'

export default function LandingPage() {
    const navigate = useNavigate()
    const handleButton = () => {
    }
    return (
        <div className='flex flex-col justify-start m-24'>
            <div className='flex justify-between items-center'>
                <img src="/images/switch-logo.png" className="w-20 h-20 object-contain" />
                <button className='text-white font-semibold text-lg p-3 w-fit rounded-xl border border-blue-300 bg-gradient-to-br from-purple-300 to-purple-900 hover:from-purple-400 hover:to-purple-900'
                    onClick={handleButton}
                >
                    Launch app
                </button>
            </div>
            <div className='flex justify-center items-center mt-28'>
                <span className='text-center font-black  text-white text-5xl'>
                    AI-POWERED MULTI-CHAIN <br /> ROUTING AGGREGATOR
                </span>
            </div>
            <div className='flex justify-center mt-5'>
                <button className='text-white font-semibold text-lg px-3 py-2 w-fit rounded-xl border border-blue-300 bg-gradient-to-tr from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600'
                    onClick={handleButton}
                >
                    <div className='flex items-center'>
                        Launch app&nbsp;&nbsp;
                        <ArrowIcon />
                    </div>
                </button>
            </div>
        </div>
    )
}
