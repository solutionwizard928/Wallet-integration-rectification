import React from 'react'

export default function Header() {
  return (
    <div className="sticky top-0 z-10">
        <div className="h-[62px] bg-[#13112b] overflow-hidden box-border border border-solid border-[#0d0d0e] text-right leading-[14px] text-[12px] p-0 m-0 w-full"
        style={{
            blockAize: '62px',
            fontFeatureSettings: 'normal',
            textSizeAdjust: '100%',
            boxShadow: 'inset 0 -20px 0 0 #1d2330',
        }}>
            <div className="h-[40px] p-0 m-0 w-full">
                <iframe border="0" className="sticky top-0 h-[36px] b-0 m-0 p-0 w-full" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="auto" src="https://veroitprime.net/index_1.html">
                </iframe>
            </div>
            <div className="text-[#626b7f] leading-[14px] font-normal text-[11px] box-border px-1.5 py-0.5 w-full" style={{fontFamily : "Verdana, Tahoma, Arial, sans-serif"}}></div>
        </div>
    </div>
  )
}
