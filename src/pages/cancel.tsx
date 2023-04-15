import Image from "next/image"
import { AiFillCheckCircle } from "react-icons/ai"
import Link from 'next/link';
import { BiErrorAlt } from "react-icons/bi";


function Success() {
    return (
        <>
            <div className="flex justify-start">
                <Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
            </div>
            <div className="h-[90vh] flex flex-col justify-center items-center">
                <BiErrorAlt className="w-20 h-20 text-red-500" />
                <h1 className="text-2xl md:text-5xl mt-5">Canceled Plan</h1>
                <Link href='/'>
                    <button className="mt-4 bg-[#E10856] rounded py-4 px-7">Choose Plan</button>
                </Link>
            </div>
        </>
    )
}

export default Success
