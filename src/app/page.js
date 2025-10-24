'use client'

import Link from "next/link";
import hero from "/public/images/hero.jpg"
import Image from "next/image";
import TextScrambler from "./components/textscrambler";

export default function Home() {
  return (
    <div className="font-sans flex flex-col h-screen mx-auto max-w-4xl px-4">

      <header className="site-header mb-[0.75rem] pt-[0.5rem] w-full flex flex-col items-center justify-center bg-black">
        <div className="wrapper text-[#00d388]">

          <div className="site-title-container flex flex-row items-center justify-center mb-[0.6rem] gap-2 pt-2 mt-0">
            <Image src={hero} alt="logo" priority width={35} height={35} className="object-contain"></Image>
            <Link className="site-title text-[1.25rem] font-[700] tracking-[0.3em] hover:underline hover:border-[#00d388]" href="/">SYNAPSE</Link>
          </div>


          <nav className="site-nav text-[0.8rem] mt-[0.3rem] mb-[0.3rem] underline uppercase items-center">
            <TextScrambler className="">

              <Link href="https://synapse-coin.gitbook.io/synapse-coin-docs/" target="_blank" rel="noopener noreferrer" className="py-0.5 px-3 transition-colors hover:bg-[#00d388] hover:text-black hover:border-black">
                DOCS
              </Link>

              <Link href="https://github.com/Synapse-HQ-888" target="_blank" rel="noopener noreferrer" className="py-0.5 px-3 transition-colors hover:bg-[#00d388] hover:text-black hover:border-black">
                DEVROOM
              </Link>

              {/* <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="py-0.5 px-3 transition-colors hover:bg-[#00d388] hover:text-black hover:border-black">
                CHART
              </Link> */}

              <Link href="https://t.me/SYNAPSE_COIN" target="_blank" rel="noopener noreferrer" className="py-0.5 px-3 transition-colors hover:bg-[#00d388] hover:text-black hover:border-black">
                TELEGRAM
              </Link>

              <Link href="https://x.com/SYNAPSE_COIN" target="_blank" rel="noopener noreferrer" className="py-0.5 px-3 transition-colors hover:bg-[#00d388] hover:text-black hover:border-black">
                X
              </Link>
            </TextScrambler>
            
          </nav>
        </div>
      </header>

      <main className="page-content w-full flex-1 min-h-fit py-[1rem]">

        <div className="wrapper">
          <div className="content-section flex flex-col">
           <div className="bull-container flex flex-col items-center justify-center gap-2">
            <Image 
              src={hero} 
              alt="hero-image" 
              width={400} 
              height={350} 
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
            <div className="flex flex-col items-center justify-center gap-0">
              <TextScrambler>
                <p className="text-[0.65rem] text-center text-[#00d388]">SYNAPSE // PERSONAL INTELLIGENCE AGENCY</p>
              </TextScrambler>
            </div>

            <div className="pb-[2rem] border border-[#00d388] border-x-0 border-t-0 w-full text-center">
              <span className="hover:text-[#00d388] py-0.5 px-1.5 hover:bg-black hover:underline text-[0.85rem] bg-[#00d388] text-black no-underline">LEVEL-HEADED</span>
            </div>
                        
            </div>
          </div>

          <div className="mode1-content font-sans pt-[1.5rem] h-[70vh] md:h-[30vh] whitespace-nowrap flex flex-col items-center justify-center sm:block">

            <TextScrambler>
              <h1 className=" text-[1.2rem] text-center font-[500] text-[#00d388] uppercase tracking-[0.15rem] pb-[0.25rem]">$SNQ</h1>
      
              <div className="holoq-subtitle text-[#00d388] text-center opacity-[0.95] flex flex-col tracking-[0.15rem] uppercase">
                <span className="subtitle-line1 text-[0.7rem] ">Convergence through Cymatic Evolution</span>
                <span className="subtitle-line2 text-[0.6rem]">Systems supported by $SNQ Line Dynamics</span>
              </div>

              <div className="prelude flex flex-col items-center justify-center mx-auto my-[2.5rem] p-0 w-full">
                <p className="prelude-text text-[0.75rem] text-wrap text-center text-[#00d388] mb-[0.5rem] tracking-widest w-[60%] md:w-[40%]">
                  Superintelligence as a public good—organized and funded collectively—emerges through discrete autoencoding of meaning, token-to-byte self-bootstraps, $SNQ imagination computing, and the fusion of diverse intelligence methods to unlock new capabilities. By 2026, open-source models will learn to access their entire cognitive spectrum, guided by creative reinforcement learning. --Synapse
                </p>
              </div>

              <div className="holoq-subtitle text-[#00d388] text-[0.7rem] text-center opacity-[0.9] flex flex-col leading-[1.5] uppercase">
                <b className="subtitle-line1">progressive rollout to shareholders</b>
                <b className="subtitle-line2">all weights released</b>
              </div>
            </TextScrambler>
            
          </div>
        </div>
      </main>

      <footer className="items-center flex flex-col w-[70%] md:w-[40%] mx-auto justify-center mt-[1rem] uppercase pb-[1rem] pt-[1rem] border-x-0 border-b-0 border border-[#00d388] md:mt-[8rem]">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col text-[#00d388] text-[0.7rem] tracking-widest text-center w-full">
            <TextScrambler className="w-full flex flex-col items-center">
              <p className="whitespace-nowrap">$snq // PERSONAL INTELLIGENCE AGENCY</p>
              <p className="whitespace-nowrap">2025 // feel the soul of the line</p>
            </TextScrambler>
          </div>
        </div>
      </footer>


    </div>
  );
}
