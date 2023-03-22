import Image from "next/image"
import { useEffect, useState } from "react"
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai"
import { BsBellSlash } from 'react-icons/bs'

function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`${scrolled && 'bg-indigo-500 shadow-lg shadow-indigo-500/50 backdrop-blur-md bg-white/30'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image src={"/logo.svg"} alt={"logo"} width={56} height={56} className="cursor-pointer object-contain" />
                <ul className="space-x-4 md:flex hidden">
                    <li className="navLink">Home</li>
                    <li className="navLink">Movies</li>
                    <li className="navLink">TV Shows</li>
                    <li className="navLink">New</li>
                    <li className="navLink">Popular</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light ">
                <AiOutlineSearch className="h-6 w-6 fill-slate-50 cursor-pointer" />
                <p className="hidden lg:inline text-white cursor-pointer">Kids</p>
                <BsBellSlash className="h-6 w-6 fill-slate-50 cursor-pointer" />
                <AiOutlineUser className="h-6 w-6 fill-slate-50 cursor-pointer" />
            </div>
        </header>
    )
}

export default Header