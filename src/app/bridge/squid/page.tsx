"use client"

import { SquidWidget } from "@0xsquid/widget";

export default function Squid() {
    return (
        <section>
            <head>
                <title>Bridge | Duckcoin - A Web3 Blockchain Ecosystem for Real-Life Solutions</title>
            </head>
            <div className="flex flex-col justify-start items-center space-y-3">
                <h3 className="text-4xl text-white text-center my-3">Squid Bridge</h3>
                <div className="flex justify-center items-center w-full border">
                    <SquidWidget config={
                        {
                            "integratorId": "Vefi-swap-widget",
                            "companyName": "Custom",
                            "style": {
                                "neutralContent": "#B1ACA1",
                                "baseContent": "#E7D3AA",
                                "base100": "#474745",
                                "base200": "#212428",
                                "base300": "#13181D",
                                "error": "#ED6A5E",
                                "warning": "#FFB155",
                                "success": "#2EAEB0",
                                "primary": "#FDB833",
                                "secondary": "#E9DCBD",
                                "secondaryContent": "#01020C",
                                "neutral": "#0C0F12",
                                "roundedBtn": "24px",
                                "roundedCornerBtn": "8px",
                                "roundedBox": "20px",
                                "roundedDropDown": "15px"
                            },
                            "slippage": 1.5,
                            "infiniteApproval": false,
                            "enableExpress": true,
                            "apiUrl": "https://api.squidrouter.com",
                            "comingSoonChainIds": [],
                            "titles": {
                                "swap": "Swap",
                                "settings": "Settings",
                                "wallets": "Wallets",
                                "tokens": "Select Token",
                                "chains": "Select Chain",
                                "history": "History",
                                "transaction": "Transaction",
                                "allTokens": "Select Token",
                                "destination": "Destination address"
                            },
                            "priceImpactWarnings": {
                                "warning": 3,
                                "critical": 5
                            },
                            "showOnRampLink": true
                        }
                    } />
                </div>
            </div>
        </section>
    )
}