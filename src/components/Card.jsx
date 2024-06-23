import React from 'react'
import Challenge from './Challenge'
import Menu from './Menu'
import { motion} from "framer-motion"

const Card = ({title, description, img}) => {


  return (
    <motion.section
    initial="rest"
    whileHover="hover"
    animate="rest"
    
    className=" relative flex gap-[18px] flex-col rounded-3xl border p-[18px] w-fit border-[#E4E4EB] bg-white">
        <div className="overflow-hidden rounded-3xl object-cover border h-full w-full ">
            <motion.img 
          src={img}
          alt="img"
          variants={{
            rest: {
                scale: 1,
                transition: { duration: 0.5, ease: [0, 0.55, 0.45, 1] }
              },
              hover: {
                scale: 1.05,
                transition: { duration: 0.5, ease: [0, 0.55, 0.45, 1] }
              }
          }}
        />
        </div>
        <div>
            <div className="flex items-center justify-between ">
                <p className="text-xl">{title}</p>
                <div className="bg-[#CFD2DD66] w-fit p-[6px] rounded-md text-xs">
                    Premium
                </div>
            </div>
            <p className="text-sm text-[#090C1580]">{description}</p>
        </div>
        <div className="flex justify-between">
            <Challenge />
            <Menu />
        </div>
    </motion.section>
  )
}

export default Card
