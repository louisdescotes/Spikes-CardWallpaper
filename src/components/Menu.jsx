import React, { useState, useEffect, useRef} from "react";
import { motion} from "framer-motion"

const menuVariants = {
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
        },
    },
};
const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,

    },
    hidden: {
      y: -20,
      opacity: 0,
    },
  };

const Menu = () => {
  const [active, setActive] = useState(false);

  const menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
    if (!menuRef.current.contains(e.target)) {
            setActive(false)
        }
    }

    document.addEventListener('mousedown', handler)

    return() => {
        document.removeEventListener("mousedown", handler);
    }
  })


  const handleClick = () => {
    setActive(!active);
  }


  return (

    <>
      <button 
      
      onClick={handleClick}
      className={` relative flex gap-4 py-3 px-4 border-[0.75px] w-10 items-center justify-center rounded-xl shadow-challenge cursor-pointer
      ${active ? "border-black" : "shadow-menu"}
      `}>
        <svg
          width="4"
          height="18"
          viewBox="0 0 4 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.55232 9.18237C2.55232 8.63082 2.1052 8.18369 1.55365 8.18369C1.0021 8.18369 0.554977 8.63082 0.554977 9.18237C0.554977 9.73392 1.0021 10.181 1.55365 10.181C2.1052 10.181 2.55232 9.73392 2.55232 9.18237Z"
            fill="black"
          />
          <path
            d="M2.55232 2.19165C2.55232 1.6401 2.1052 1.19298 1.55365 1.19298C1.0021 1.19298 0.554977 1.6401 0.554977 2.19165C0.554977 2.74321 1.0021 3.19033 1.55365 3.19033C2.1052 3.19033 2.55232 2.7432 2.55232 2.19165Z"
            fill="black"
          />
          <path
            d="M2.55232 16.1731C2.55232 15.6215 2.1052 15.1744 1.55365 15.1744C1.0021 15.1744 0.554977 15.6215 0.554977 16.1731C0.554977 16.7246 1.0021 17.1718 1.55365 17.1718C2.1052 17.1718 2.55232 16.7246 2.55232 16.1731Z"
            fill="black"
          />
          <path
            d="M2.55232 9.18237C2.55232 8.63082 2.1052 8.18369 1.55365 8.18369C1.0021 8.18369 0.554977 8.63082 0.554977 9.18237C0.554977 9.73392 1.0021 10.181 1.55365 10.181C2.1052 10.181 2.55232 9.73392 2.55232 9.18237Z"
            stroke="black"
            stroke-width="0.998673"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.55232 2.19165C2.55232 1.6401 2.1052 1.19298 1.55365 1.19298C1.0021 1.19298 0.554977 1.6401 0.554977 2.19165C0.554977 2.74321 1.0021 3.19033 1.55365 3.19033C2.1052 3.19033 2.55232 2.7432 2.55232 2.19165Z"
            stroke="black"
            stroke-width="0.998673"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.55232 16.1731C2.55232 15.6215 2.1052 15.1744 1.55365 15.1744C1.0021 15.1744 0.554977 15.6215 0.554977 16.1731C0.554977 16.7246 1.0021 17.1718 1.55365 17.1718C2.1052 17.1718 2.55232 16.7246 2.55232 16.1731Z"
            stroke="black"
            stroke-width="0.998673"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <motion.div 
      ref={menuRef}
    variants={ menuVariants }
    animate= {active ? 'visible' : 'hidden'}
      className={`z-10 absolute bg-white border-[.75px] p-[6px] gap-[6px] rounded-xl -right-28 -bottom-32 shadow-menu flex-col flex 
    ${active ? "flex" : "hidden"}
      `}>
        <motion.span
        variants={itemVariants} 
        className="flex items-center gap-2 p-[6px] rounded-md cursor-pointer hover:bg-[#CFD2DD33]">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70468 1.35307H2.89857C2.53438 1.35307 2.1851 1.49774 1.92758 1.75526C1.67006 2.01278 1.52539 2.36205 1.52539 2.72624V12.3385C1.52539 12.7027 1.67006 13.0519 1.92758 13.3095C2.1851 13.567 2.53438 13.7116 2.89857 13.7116H12.5108C12.875 13.7116 13.2243 13.567 13.4818 13.3095C13.7393 13.0519 13.884 12.7027 13.884 12.3385V7.53236M12.0817 1.0956C12.3548 0.822456 12.7253 0.669006 13.1116 0.669006C13.4978 0.669006 13.8683 0.822456 14.1414 1.0956C14.4146 1.36874 14.568 1.7392 14.568 2.12548C14.568 2.51176 14.4146 2.88222 14.1414 3.15536L7.95323 9.34426C7.7902 9.50715 7.58879 9.62639 7.36757 9.69099L5.395 10.2677C5.33592 10.285 5.27329 10.286 5.21368 10.2707C5.15406 10.2554 5.09965 10.2244 5.05613 10.1809C5.01262 10.1374 4.9816 10.083 4.96632 10.0234C4.95105 9.96375 4.95208 9.90112 4.96931 9.84204L5.54605 7.86947C5.61095 7.64843 5.73042 7.44726 5.89346 7.2845L12.0817 1.0956Z"
              stroke="#090C15"
              stroke-opacity="0.8"
              stroke-width="1.19841"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Edit Challenge
        </motion.span>

        <motion.span
                            variants={itemVariants} 

        className="flex items-center gap-2 p-[6px] rounded-md cursor-pointer  hover:bg-[#CFD2DD33]">
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.21204 7.98661V13.4793C1.21204 13.8435 1.35671 14.1928 1.61423 14.4503C1.87175 14.7078 2.22102 14.8525 2.58521 14.8525H10.8243C11.1885 14.8525 11.5377 14.7078 11.7952 14.4503C12.0528 14.1928 12.1974 13.8435 12.1974 13.4793V7.98661M9.45109 3.86708L6.70474 1.12073M6.70474 1.12073L3.95839 3.86708M6.70474 1.12073L6.70474 10.0464"
              stroke="#090C15"
              stroke-opacity="0.8"
              stroke-width="1.19841"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Share Challenge
        </motion.span>

        <motion.span
                            variants={itemVariants} 

        className="flex items-center gap-2 p-[6px] rounded-md text-[#D73F3E] cursor-pointer  hover:bg-[#CFD2DD33]">
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.52539 4.32121H13.884M12.5108 4.32121V13.9334C12.5108 14.62 11.8242 15.3066 11.1376 15.3066H4.27174C3.58515 15.3066 2.89857 14.62 2.89857 13.9334V4.32121M4.95833 4.32121V2.94804C4.95833 2.26145 5.64492 1.57486 6.33151 1.57486H9.07786C9.76445 1.57486 10.451 2.26145 10.451 2.94804V4.32121"
              stroke="#D73F3E"
              stroke-opacity="0.8"
              stroke-width="1.19841"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          Delete Challenge
        </motion.span>
      </motion.div>
    </>
  );
};

export default Menu;
