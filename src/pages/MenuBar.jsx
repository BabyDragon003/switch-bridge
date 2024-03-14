import React, { useEffect, useRef, useState } from 'react'
// import Sidebar from '../components/Sidebar'
// import { SquidWidget } from '@0xsquid/widget'
import { useNavigate } from 'react-router-dom'
import { ArrowIcon } from '../components/Icon'

export default function MenuBar() {
    const navigate = useNavigate()

    return (
        <div className='menu-bar'>
            <img src="/images/taos-logo3.png" className="logo" />
            <div className='title_obj'>
                <span className='title'>TAOS DEXTENSOR</span>
            </div>
        </div>
    )
}
