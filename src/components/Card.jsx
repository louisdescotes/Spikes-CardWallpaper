import React from 'react'
import Challenge from './Challenge'
import Menu from './Menu'

const Card = ({title, description, img}) => {
  return (
    <section className=" relative flex gap-[18px] flex-col rounded-3xl border p-[18px] w-fit border-[#E4E4EB] bg-white">
        <div>
            <img className="rounded-2xl" src={img} alt="img" />
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
    </section>
  )
}

export default Card
