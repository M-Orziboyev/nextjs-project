import React from 'react';
import {PlanCardsProps} from "./plan-cards-props";
import Image from "next/image";
import {RiVipCrown2Line} from "react-icons/ri";
import {AiOutlineHourglass, AiOutlineVideoCameraAdd} from "react-icons/ai";

const PlanCards = ({product}: PlanCardsProps) => {
    return <div key={product.id} className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-5000">
        <h3 className="mb-3 text-xl font-bold text-red-600">{product.name}</h3>
        <div className="relative">
            <Image
                src={product.images[0]}
                alt='Colors'
                className='rounded-xl w-full object-cover'
                width={400}
                height={400}
            />
            <p className="absolute top-0 bg-black/70 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{(product.default_price.unit_amount / 100).toLocaleString('en-US', {style: 'currency', currency:'USD'})}</p>
            <div className='absolute rounded-xl left-0 right-0 bottom-0 top-0 bg-black/20 w-full h-full' />
        </div>
        <div className="border-[1px] border-white/20 mt-4" />
        <button className="mt-4 bg-red-600 hover:opacity-75 w-full py-4 rounded font-semibold">BUY PLAN</button>
        <div className="my-4 flex flex-col space-y-2">
            {product.metadata.adv.split(', ').map((c, id) => (
                <div key={c} className='flex space-x-2 items-center'>
                    {id == 0 && <RiVipCrown2Line className={'w-5 h-5'}/>}
                    {id == 1 && <AiOutlineHourglass className={'w-5 h-5'}/>}
                    {id == 2 && <AiOutlineVideoCameraAdd className={'w-5 h-5'}/>}
                    <p>{c}.</p>
                </div>
            ))}
        </div>
    </div>
};

export default PlanCards;