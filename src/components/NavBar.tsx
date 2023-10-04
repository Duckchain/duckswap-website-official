"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Wallet } from "lucide-react";
import NavImg from "@/assets/imgs/logo.png";
import "@/app/globals.css";
import { PiCaretDownBold, PiCaretRightBold } from 'react-icons/pi'
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openBridge, setOpenBridge] = useState(false);
  const [openBridgeMB, setOpenBridgeMB] = useState(false);
  const { push } = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileBridge = () => {
    setOpenBridgeMB(!openBridgeMB)
  }

  enum Route {
    STARGATE = 'stargate',
    SQUID = 'squid',
    WANCHAIN = 'wanchain'
  }

  const bridges = [
    {
      bridge: 'Stargate',
      route: `/bridge?tab=${Route.STARGATE}`
    },
    {
      bridge: 'Squid',
      route: `/bridge?tab=${Route.SQUID}`
    },
    {
      bridge: 'Wanchain',
      route: `/bridge?tab=${Route.WANCHAIN}`
    },
  ]

  return (
    <nav>
      {/* Large Devices */}
      <div className="flex justify-between items-center mt-8 mx-4 sm:mx-8 md:mx-16 lg:mx-10">
        <div className="logo cursor-pointer text-white">
          <Link href={"/"}>
            <Image
              className="rounded-xl"
              src={NavImg}
              width="120"
              height="41.801"
              alt="logo"
            />
          </Link>
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <X
              className="text-white cursor-pointer"
              size={24}
              onClick={handleMenuToggle}
            />
          ) : (
            <Menu
              className="text-white cursor-pointer"
              size={24}
              onClick={handleMenuToggle}
            />
          )}
        </div>
        <div
          className={`hidden text-white md:flex flex-col md:flex-row gap-x-10`}
        >
          <Link
            href={"/#about"}
            className="text-lg hover:text-600 hover:duration-700 "
          >
            About
          </Link>
          <Link
            href={"/#howtobuy"}
            className="text-lg nav-text:hover"
          >
            How to Buy
          </Link>
          <Link
            href={"/#duckonomics"}
            className="text-lg hover:text-600 hover:duration-700"
          >
            Duckonomics
          </Link>
          <Link
            href={"/#duckmap"}
            className="text-lg hover:text-600  hover:duration-700"
          >
            Duckmap
          </Link>
          <div>
            <button
              className="text-lg hover:text-600 hover:duration-700 relative"
              onMouseOver={() => setOpenBridge(true)}
              onMouseLeave={() => {
                setTimeout(() => {
                  setOpenBridge(false)
                }, 1000)
              }}
            >
              Bridge

              {openBridge && <div className="w-40 border-[#FDB833] border shadow-md rounded-md flex flex-col items-center gap-y-2 p-1 absolute top-8 right-0">
                {bridges.map((bridge, index) => {
                  return (
                    <Link href={bridge.route} key={index} className="py-2 px-1 hover:bg-[#FDB833] hover:text-white w-full rounded-md">
                      {bridge.bridge}
                    </Link>
                  )
                })}
              </div>}
            </button>
          </div>
        </div>

        {/* Mobile Devices */}
        <div
          className={`${isMenuOpen
            ? "fixed inset-0 z-50 bg-black transition-opacity duration-300 ease-in-out"
            : "hidden"
            }`}
        >
          <div className="flex justify-between items-center text-white h-16 px-4 sm:px-6">
            <Link href={"/"}>
              <Image
                className="rounded-xl"
                src={NavImg}
                width="120"
                height="41.801"
                alt="logo"
              />
            </Link>
            <div className="md:hidden">
              {isMenuOpen ? (
                <X
                  className="text-white cursor-pointer"
                  size={24}
                  onClick={handleMenuToggle}
                />
              ) : (
                <Menu
                  className="text-white  cursor-pointer"
                  size={24}
                  onClick={handleMenuToggle}
                />
              )}
            </div>
          </div>
          <div className={`px-2 pt-2 pb-3 space-y-1 bg-black`}>
            <Link
              href={"/#about"}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              About
            </Link>
            <Link
              href={"/#howtobuy"}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              How to Buy
            </Link>
            <Link
              href={"/#duckonomics"}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              Duckonomics
            </Link>
            <Link
              href={"/#duckmap"}
              className="block px-3 py-2 text-base font-medium text-white"
            >
              Duckmap
            </Link>
            <button
              className="px-3 py-2 text-base font-medium text-white relative flex items-center gap-x-2 flex-col"
              onClick={toggleMobileBridge}
            >
              <span className="flex items-center gap-x-2">Bridge
                {openBridgeMB ? (<PiCaretRightBold color="#FDB833" />) : (<PiCaretDownBold color="#FDB833" />)}</span>

              {openBridgeMB && <div className="flex flex-col items-start gap-y-2 p-1">
                {bridges.map((bridge, index) => {
                  return (
                    <Link href={bridge.route} key={index} className="font-medium text-base text-white">
                      {bridge.bridge}
                    </Link>
                  )
                })}
              </div>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
