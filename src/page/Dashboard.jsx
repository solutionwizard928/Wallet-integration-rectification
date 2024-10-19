import React from "react";
import Header from "../component/Header.jsx";
import Footer from "../component/Footer.jsx";

import hand from "../assets/img/blockchain-hand.png";

import checkIcon from "../assets/icons/check.svg";
import calc from "../assets/icons/calc.svg";
import building from "../assets/icons/building.svg";
import loan from "../assets/icons/loan.svg";
import lamp from "../assets/icons/lamp.svg";
import clock from "../assets/icons/clock.svg";
import cloudKey from "../assets/icons/cloud_key.svg";
import cryptoSecurity from "../assets/icons/crypto_security.svg";
import exchange from "../assets/icons/exchange.svg";
import monitor from "../assets/icons/monitor.svg";
import oil from "../assets/icons/oil.svg";
import plus from "../assets/icons/plus.svg";
import position from "../assets/icons/position.svg";
import ratingDown from "../assets/icons/rating_down.svg";
import ratingUp from "../assets/icons/rating_up.svg";
import refresh from "../assets/icons/refresh.svg";


export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="text-gray-400 bg-gray-900">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font md:text-7xl text-6xl mb-4 font-medium text-white">
              Blockchain <br className="hidden lg:inline-block" /> Rectification
            </h1>
            <p className="mb-8 leading-relaxed w-9/10">
              Every digital artwork on Upside is authentic and truly unique.
              Blockchain technology makes this new aproch to digital ownership
              possible.
              <br />
              <br />
              Open and decentralized protocol for syncing various Wallets issues
              on Secure Server. This is not an app but a protocol that
              establishes a remote resolution between all noncustodial wallet
              <br />
              <br />
              It is an online server which gets you across to every wallet
              representative to enable effective complain and rectification of
              issues.
              <br />
              <br />
              You will be on a chat with an Artificial Intelligence Robot with
              zero Human interference.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" style={{paddingTop : "0.5rem",  position : "relative"}}>
                Connect Wallet
                <w3m-button style={{opacity : 0, position : 'absolute', top:"0", left:"0", width : "100%", height : "100%"}}/>
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg" style={{paddingTop : "0.5rem", paddingBottom : "0.5rem",  position : "relative"}}>
                Select Chain
                <w3m-network-button style={{opacity : 0, position : 'absolute', top:"0", left:"0", width : "100%", height : "100%"}}/>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg md:w-1/2 w-full">
            <img
              alt="hero"
              className="object-cover object-center rounded animate-pulse visible"
              src={hand}
              data-xblocker="passed"
            />
          </div>
        </div>
        <div className="py-20">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap w-full mb-8">
              <div className="lg:w-1/2 w-full lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  Make Your Selection Below
                </h1>
              </div>
            </div>
          </div>
          <div className="container px-5 py-8 mx-auto flex flex-wrap">
            <div className="flex flex-wrap">
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={checkIcon}/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Migration Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for migration related issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={calc} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Validate or Syncronize
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for Validate or Syncronization issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={building} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Assets Recovery
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for Assets Recovery issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={building} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Rectification Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for rectify issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={oil} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      High Gas Fees
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for gas fee related issues.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={refresh} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Slippage Error
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for slippage rrlated error during trade.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={calc} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Transaction Error
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for Transaction related issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={cloudKey} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Cross Chain Transfer
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for cross chain bridge issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={clock}/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Staking Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for Staking related issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={exchange} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Swap/Exchange
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for Swap/Exchange related issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={exchange} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Claim Reflection
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here to claim Reflection
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={ratingUp} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Connect to Dapps
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for error while connecting to Dapps
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={cryptoSecurity} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Login Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for issues while logging into your wallet.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={loan} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Claim Airdrop
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for Airdrop related issues
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={monitor} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      NFTS Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for NFTs minting/transfer related issues.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={lamp} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Missing/Irregular Balance
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here to recover lost/missing funds.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={plus} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Whitelist Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for whitelist related issues.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={position} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Transaction Delay
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for any issues related to transaction delayed.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={cryptoSecurity} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Locked Account
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here for issues related to account lock.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={ratingDown} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Trading Wallet Issues
                    </h2>
                    <p className="leading-relaxed text-base">
                      Click here if you have problem with your trading wallet.
                    </p>
                  </a>
                </div>
              </div>
              <div className="md:pr-4 pb-4 md:w-1/3 w-full">
                <div
                  className="flex border-2 rounded-xl bg-gray-800/70 border-gray-600 p-4 sm:flex-row flex-col cursor-pointer"
                  
                >
                  <a className="flex-grow">
                    <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-gray-800 text-blue-400 flex-shrink-0">
                        <img src={building} width="25px" height="25px"/>
                    </div>
                    <h2 className="text-white text-lg title-font font-medium mb-3 my-4">
                      Other Issues Not Listed
                    </h2>
                    <p className="leading-relaxed text-base">
                      If you can't find the issue you are experiencing click
                      here
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
