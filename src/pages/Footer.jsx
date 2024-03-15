import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

    return (
        <div className='footer'>
            <a href='https://t.me/Dextensor'>
                <img src="/images/telegram.png" className="footer-tg-ico" />
            </a>
            {/* <a href='https://'>
                <img src="/images/reddit.png" className="footer-reddot-ico" />
            </a> */}
            <a href='https://twitter.com/TAOS_ERC20'>
                <img src="/images/twitter.png" className="footer-twitter-ico" />
            </a>
            {/* <a href='https://'>
                <img src="/images/Group.svg" className="footer-discord-ico" />
            </a> */}
        </div>
    )
}
