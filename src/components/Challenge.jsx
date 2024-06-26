import React from 'react'

const Challenge = () => {

  return (
      <button
       className={`flex gap-2 py-2 px-3 border-[0.75px] w-fit rounded-xl  cursor-pointer shadow-challenge hover:shadow-none duration-300 ease-[0, 0.55, 0.45, 1]
       `}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.441 17.7352L3.95622 6.25047V3.25446H6.95224L18.437 14.7392M13.943 19.2332L19.935 13.2412M16.939 16.2372L20.9337 20.2319M19.935 21.2306L21.9323 19.2332M15.441 6.74981L18.9363 3.25446H21.9323V6.25047L18.437 9.74583M5.95357 14.2399L9.94826 18.2346M7.95092 17.2359L4.9549 20.2319M3.95622 19.2332L5.95357 21.2306" stroke="#090C15" stroke-width="1.49801" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Start Challenge
      </button>
  )
}

export default Challenge
