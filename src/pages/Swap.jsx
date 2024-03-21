import React, { useEffect, useRef, useState } from 'react'
import { SquidWidget } from '@0xsquid/widget'
import MenuBar from './MenuBar'
import Footer from './Footer'

const Swap = () => {
    const [active, setActive] = useState(1)
    const [settings, setSettings] = useState(false)
    const [currencyOne, setCurrencyOne] = useState(false)
    const [currencyTwo, setCurrencyTwo] = useState(false)
    const [currencyDetails, setCurrencyDetails] = useState(false)
    const [swap, setSwap] = useState(false)

    let myRef = useRef(null);

    // const currencyOneTableData = [
    //     { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    //     { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    //     { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    //     { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    //     { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    // ]
    // const currencyTwoTableData = [
    //     { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    //     { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    //     { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    //     { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    //     { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    // ]
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
            {/* main content */}
            <MenuBar />
            <section className="flex flex-col pt-5 pb-5" >
                <div className="flex flex-column">
                    <div className='mobile_title'>
                        TAOS DEXTENSOR-V1
                    </div>
                    <div className="App swap-padding" style={{ "display": "flex", "justify-content": "center" }}>
                        <div
                            style={{ display: "flex", maxWidth: "430px", width: "100%", justifyContent: "center", paddingLeft: "10px", paddingRight: "10px" }}
                        >
                            <SquidWidget config={
                                {
                                    companyName: "DEXTENSOR",
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
                                        "base100": "#1A1A1A",
                                        "base200": "#26242C",
                                        "base300": "#120417",
                                        "error": "#ED6A5E",
                                        "warning": "#FFB155",
                                        "success": "#2EAEB0",
                                        "primary": "#FE4F4C",
                                        "secondary": "#37394C",
                                        "secondaryContent": "#B2BCD3",
                                        "neutral": "#000000",
                                        "roundedBtn": "0px",
                                        "roundedCornerBtn": "0px",
                                        "roundedBox": "0px",
                                        "roundedDropDown": "0px"
                                    },
                                    availableChains: {
                                        source: ["celestia", 1, 56, 137, 43114, 42161, 10, 8453, 59144, 5000, 534352, 250, 1284],
                                        destination: ["celestia", 1, 56, 137, 43114, 42161, 10, 8453, 59144, 5000, 534352, 250, 1284]
                                    },
                                    collectFees: {
                                        integratorAddress: "0x0992Df042be6dE82f157586DdB7FEDDA72195E65",
                                        fee: 30
                                    }
                                }} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Swap;