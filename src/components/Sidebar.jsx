import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Sidebar() {
    // const [menu, setMenu] = useState(false)
    const [collapsemenu, setCollapseMenu] = useState(false)

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <div className='sidebar-menus'>
            <section className={collapsemenu ? "sidebar mobile-sidebar" : "sidebar collapse"}>
                <div className="top">
                    <img src="/images/switch-logo1.png" alt="logo" className='logo' /> <span className='text-gradient'>SWITCH.io</span>
                    <button className="mobile-menu-close-icon" onClick={() => { setCollapseMenu(!collapsemenu) }}>
                        <img src="/images/close.svg" alt="menu" />
                    </button>
                </div>
                {/* <div>
                    <span className='text-center  text-white text-3xl'>
                        AI-POWERED MULTI-CHAIN <br /> ROUTING AGGREGATOR
                    </span>
                </div> */}
                <div className="menu-icon">
                    <button className='collapse-menu-btn' onClick={() => { setCollapseMenu(!collapsemenu) }}>
                        <img src="/images/menu-icon.svg" alt="menu-icon" />
                    </button>
                    <div className="social-icons" style={{ gap: "1rem" }}>
                        <a href='/' target="blank">
                            <img src="/images/discord.svg" alt="discord" />
                        </a>
                        <a href='/' target="blank">
                            <img src="/images/telegram.svg" alt="telegram" />
                        </a>
                        <a href='/' target="blank">
                            <img src="/images/twitter.svg" alt="twitter" />
                        </a>
                        <a href='/' target="blank">
                            <img src="/images/medium.svg" alt="medium" />
                        </a>
                    </div>
                </div>
                <button className="mobile-menu-icon" onClick={() => { setCollapseMenu(!collapsemenu) }}>
                    <img src="/images/menu-icon.svg" alt="menu" />
                </button>
            </section>
        </div>
    )
}
