export function Duckonomics() {
    const allocations = [
        "Team 10%",
        "IDO 20%",
        "Presale  15%",
        "Private Sale 3%",
        "Liquidity  10%",
        "Marketing 10%",
        "Development 10%",
        "Reserve 20%",
        "Community 10%",
        "Aidrop 7%",
        "Tax : 15% buy and sale",
        "5% to holders",
        "5% to liquidity",
        "5% to marketing and burning"
    ]

    return (
        <section id="duckonomics" className="my-[10rem] px-6 space-y-5 py-5">
            <div className="text-center">
                <h3 className=" font-extrabold text-white tracking-tight text-5xl">Ducko<span className="text-[#FDB833]">nomics</span></h3>
                <p className="text-2xl text-white mx-auto sm:w-8/12 w-full">The DUCKCOIN  is the native token of Duckchain. It serves as a governance token with a maximum supply and represents platform governance functions. This documentation provides an overview of the Duck token and its various use cases and functionalities within the Duckcoin ecosystem.</p>
            </div>
            <div className="mx-auto w-5/6 space-y-2">
                <h3 className="text-[#FDB833] text-xl font-semibold">Token Emission
                </h3>
                <p className="text-white">The emission of DUCK tokens is directly tied to the Total Value Locked (TVL) growth within the Duckcoin platform.</p>
                <h3 className="text-[#FDB833] text-xl font-semibold">Use Case
                </h3>
                <p className="text-white">Transaction fees, governance, payment , staking etc</p>
            </div>
            <div className="mx-auto w-5/6 flex gap-x-3 justify-start sm:flex-row flex-col">
                <div>
                    <h3 className="text-[#FDB833] text-xl font-semibold">Token Details
                    </h3>
                    <p className="text-white"><span className="font-semibold text-[#FDB833]">Token Name</span>: Duckcoin</p>
                    <p className="text-white"><span className="font-semibold text-[#FDB833]">Token Supply</span>: Fixed supply</p>
                    <p className="text-white"><span className="font-semibold text-[#FDB833]">Token Type</span>: Utility and Governance Token</p>
                </div>
                <div>
                    <h3 className="text-[#FDB833] text-xl font-semibold">Use Case
                    </h3>
                    <p className="text-white">Transaction fees, governance, payment , staking etc</p>
                </div>
            </div>
            <div className="mx-auto w-5/6 space-y-2">
                <h3 className="text-[#FDB833] text-xl font-semibold">Allocations
                </h3>
                <div className="text-white flex flex-nowrap sm:flex-wrap flex-col sm:h-[10vh] h-fit">
                    {allocations.map((text, index) => {
                        return (
                            <p key={index}>
                                {text}
                            </p>
                        )
                    })}
                </div>
            </div>
            <div className="mx-auto w-5/6 space-y-2">
                <h3 className="text-[#FDB833] text-xl font-semibold">Distributions
                </h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <tbody className="text-white">
                            <tr>
                                <td className="border px-4 py-2">Presale</td>
                                <td className="border px-4 py-2">15%</td>
                                <td className="border px-4 py-2">1,500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Initial Distribution</td>
                                <td className="border px-4 py-2">Early Supporters</td>
                                <td className="border px-4 py-2">5%</td>
                                <td className="border px-4 py-2">500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Total</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">20%</td>
                                <td className="border px-4 py-2">2,000,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Development Fund</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">20%</td>
                                <td className="border px-4 py-2">2,000,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Ecosystem Partnerships</td>
                                <td className="border px-4 py-2">5%</td>
                                <td className="border px-4 py-2">500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Ecosystem Development</td>
                                <td className="border px-4 py-2">Marketing and Promotion</td>
                                <td className="border px-4 py-2">10%</td>
                                <td className="border px-4 py-2">1,000,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Team</td>
                                <td className="border px-4 py-2">5%</td>
                                <td className="border px-4 py-2">500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Total</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">40%</td>
                                <td className="border px-4 py-2">4,000,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Staking Rewards</td>
                                <td className="border px-4 py-2">20%</td>
                                <td className="border px-4 py-2">2,000,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Staking and Rewards</td>
                                <td className="border px-4 py-2">Validator Rewards</td>
                                <td className="border px-4 py-2">5%</td>
                                <td className="border px-4 py-2">500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Total</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">25%</td>
                                <td className="border px-4 py-2">2,500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Community Grants and Initiatives</td>
                                <td className="border px-4 py-2">10%</td>
                                <td className="border px-4 py-2">1,000,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Community and Adoption</td>
                                <td className="border px-4 py-2">User Adoption Incentives</td>
                                <td className="border px-4 py-2">5%</td>
                                <td className="border px-4 py-2">500,000,000</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Total</td>
                                <td className="border px-4 py-2"></td>
                                <td className="border px-4 py-2">15%</td>
                                <td className="border px-4 py-2">1,500,000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}