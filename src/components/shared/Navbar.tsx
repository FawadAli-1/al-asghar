import Image from "next/image"
import logo from "../../../public/logo.png"
import { Lobster } from "next/font/google"
import { Facebook, Instagram, Menu } from "lucide-react"
import Link from "next/link"


const lobster = Lobster({
    weight: "400",
    variable: "--lobster",
    subsets: ['latin']
})

const Navbar = () => {
    return (
        <nav className='lg:flex lg:justify-between lg:items-center bg-green-700/80 sticky lg:py-6 lg:px-22'>
            <div className="flex justify-between items-center px-4">
                <Link href={'/'} className="flex items-center gap-3 lg:justify-center">
                    <Image src={logo} width={50} height={50} alt="Logo" />
                    <p className={`${lobster.className} lg:text-xl antialiased`}>Al-Asghar Travels & Tours</p>
                </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center">
                <div>
                    <ul className='flex gap-10 mr-16 uppercase font-medium'>
                        <Link href={"/"} className="hover:cursor-pointer hover:opacity-90"><li>Home</li></Link>
                        <Link href={"#services"} className="hover:cursor-pointer hover:opacity-90"><li>Services</li></Link>
                        <Link href={"/contact"} className="hover:cursor-pointer hover:opacity-90"><li>Contact</li></Link>
                        <Link href={"/about"} className="hover:cursor-pointer hover:opacity-90"><li>About</li></Link>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center justify-center gap-6">
                        <li className="hover:cursor-pointer hover:opacity-90"><Facebook /></li>
                        <li className="hover:cursor-pointer hover:opacity-90"><Instagram /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar