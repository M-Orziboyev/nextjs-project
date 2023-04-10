import Image from "next/image"
import useAuth from '../../hooks/useAuth';
import { RiVipCrown2Line } from 'react-icons/ri'
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { SubscriptionPlanProps } from "./subscription-plan-props";

const SubscriptionPlan = ({ products }: SubscriptionPlanProps) => {
    
    const { logout } = useAuth()
    return (
        <div className="min-h-screen">
            <div className="border-b-2 border-gray-300/20 h-[10vh] flex justify-between items-center px-4 md:px-10">
                <Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
                <div onClick={logout} className="cursor-pointer hover:underline">Logout</div>
            </div>
            <div className="flex flex-col space-y-4 text-center pt-5">
                <h1 className="text-2xl md:text-5xl text-shadow-sm">Fixeble pricing for teams of any size.</h1>
                <p className="teext-xl text-shadow-sm">Relaxing with wathching with your favourites movies and tv</p>
            </div>
            <div className=" flex justify-center items-center py-20">
                <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                    {products.map(product => (
                        <div key={product.id} className="max-w-sm cursor-pointer bg-white/20 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-5000">
                            <h3 className="mb-3 text-xl font-bold text-red-600">{product.name}</h3>
                            <div className="relative">
                                <Image
                                    src={product.images[0]}
                                    alt='Colors'
                                    className='rounded-xl w-full object-cover'
                                    width={400}
                                    height={400}
                                />
                                <p className="absolute top-0 bg-black/70 text-white font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">${product.default_price.unit_amount}</p>
                                <div className='absolute rounded-xl left-0 right-0 bottom-0 top-0 bg-black/20 w-full h-full' />
                            </div>
                            <div className="border-[1px] border-white/20 mt-4" />
                            <button className="mt-4 bg-red-600 hover:opacity-75 w-full py-4 rounded font-semibold">BUY PLAN</button>
                            <div className="my-4 flex flex-col space-y-2">
                                
                                {/* <div className="flex space-x-2 items-center">
                                    <AiOutlineHourglass className="w-5 h-5" />
                                    <p>100 hour video.</p>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <AiOutlineVideoCameraAdd className="w-5 h-5" />
                                    <p>HD format</p>
                                </div> */}
                            </div>
                        </div>
                    )).reverse()}
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPlan
