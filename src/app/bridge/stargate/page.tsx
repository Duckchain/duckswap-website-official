import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stargate Bridge | A Web3 Blockchain Ecosystem for Real-Life Solutions",
    description: 'Duckcoin is a blockchain ecosystem that integrates institutions, people, groups, and businesses into the web3 economy. Join the Duckies community and explore the world of decentralized finance (DeFi).',
}

export default function Stargate() {
    return (
        <>
            <h3 className="text-4xl text-white text-center my-3">Stargate Bridge</h3>
            <div className="flex justify-center items-center my-5 mb-16 px-2 py-10 w-full h-fit">
                <div style={{
                    width: "420px",
                    height: "640px",
                    borderRadius: "30px"
                }}>
                    <stargate-widget partnerId="0x0021" feeCollector="0xc13b65f7c53Cd6db2EA205a4b574b4a0858720A6" tenthBps="10" theme="dark" />
                </div>
                <script
                    src="https://unpkg.com/@layerzerolabs/stargate-ui@latest/element.js"
                    defer
                    async>
                </script>
            </div>
        </>
    )
}