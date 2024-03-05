import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { SquidWidget } from '@0xsquid/widget'

export default function Swap() {
    const [active, setActive] = useState(1)
    const [settings, setSettings] = useState(false)
    const [currencyOne, setCurrencyOne] = useState(false)
    const [currencyTwo, setCurrencyTwo] = useState(false)
    const [currencyDetails, setCurrencyDetails] = useState(false)
    const [swap, setSwap] = useState(false)

    let myRef = useRef(null);

    const currencyOneTableData = [
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    ]
    const currencyTwoTableData = [
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    ]
    const closeActive = () => {
        // if(settings){
        //     setSettings(false)
        // }
        // if(currencyOne){
        //     setCurrencyOne(false)
        // }
        // if(currencyTwo){
        //     setCurrencyTwo(false)
        // }
        if (currencyDetails) {
            setCurrencyDetails(false)
        }
    }
    return (
        <div className='swap' onClick={closeActive}>
            {/* sidebar */}
            <Sidebar />

            {/* main content */}
            <section className="flex flex-col" >
                <div className="flex">
                    <div className="App swap-padding" style={{ "display": "flex", "justify-content": "center" }}>
                        <div
                            style={{ display: "flex", maxWidth: "430px", width: "100%", justifyContent: "center", paddingLeft: "10px", paddingRight: "10px" }}
                        >
                            <SquidWidget config={
                                {
                                    companyName: "SWITCH",
                                    slippage: 1,
                                    integratorId: "tiagate-swap-widget",
                                    infiniteApproval: false,
                                    instantExec: false,
                                    apiUrl: "https://api.0xsquid.com",
                                    priceImpactWarnings: {
                                        warning: 3,
                                        critical: 5,
                                    },
                                    initialFromChainId: 1,
                                    initialToChainId: 56,
                                    "style": {
                                        "neutralContent": "#9DA7B1",
                                        "baseContent": "#FFFDFD",
                                        "base100": "#5a1270",
                                        "base200": "#22042b",
                                        "base300": "#120417",
                                        "error": "#ED6A5E",
                                        "warning": "#FFB155",
                                        "success": "#2EAEB0",
                                        "primary": "#AB67CB",
                                        "secondary": "#37394C",
                                        "secondaryContent": "#B2BCD3",
                                        "neutral": "#36143F",
                                        "roundedBtn": "90px",
                                        "roundedCornerBtn": "999px",
                                        "roundedBox": "20px",
                                        "roundedDropDown": "20px"
                                    },
                                    availableChains: {
                                        source: ["celestia", 1, 56, 137, 43114, 42161, 10, 8453, 59144, 5000, 534352, 250, 1284],
                                        destination: ["celestia", 1, 56, 137, 43114, 42161, 10, 8453, 59144, 5000, 534352, 250, 1284]
                                    },
                                    collectFees: {
                                        integratorAddress: "0xB529e98A626107335c634B4a905e8317d2250756",
                                        fee: 30
                                    }
                                }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
