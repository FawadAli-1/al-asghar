import { Button } from "../ui/button"
import whatsapp from "../../../public/whatsapp-icon.svg"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section className="mt-8 sm:mt-22 w-[90%] m-auto lg:w-1/2 lg:m-auto flex flex-col items-start justify-around h-[70vh] sm:h-[60vh] lg:h-screen gap-6">
            <div className="lg:flex lg:flex-col lg:items-center lg:gap-3">
                <h1 className="mb-4 text-5xl sm:text-6xl lg:text-center font-black">Explore the beauty of <span className="text-green-700">Pakistan</span> with us!</h1>
                <p className="lg:text-center mb-4 font-medium text-lg">Adventure, Culture, Heritage — Pakistan Has It All. Let Us Show You!</p>
            </div>
            <div className="flex flex-col gap-1">
                <Button asChild size={"lg"} className="bg-green-700 hover:cursor-pointer hover:bg-green-700/90">
                    <Link href={"https://wa.me/03021557590"}><Image src={whatsapp} width={20} height={20} alt="Whatsapp" />Contact Us (1)</Link>
                </Button>
                <Button asChild size={"lg"} className="bg-green-700 hover:cursor-pointer hover:bg-green-700/90">
                    <Link href={"https://wa.me/+923438209060"}><Image src={whatsapp} width={20} height={20} alt="Whatsapp" />Contact Us (2)</Link>
                </Button>
                <Button size={"lg"} className="hidden hover:cursor-pointer">Discover</Button>
            </div>
        </section>
    )
}

export default Hero