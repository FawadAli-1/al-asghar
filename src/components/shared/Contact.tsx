import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import whatsapp from "../../../public/whatsapp-icon.svg"

const Contact = () => {
    return (
        <section className='bg-green-700 flex flex-col items-center text-center pb-8'>
            <h1 className='text-4xl font-black py-4'>Contact Us On Whatsapp</h1>
            <div className='flex flex-col items-center gap-4'>
                <Button asChild size={"lg"} className="bg-green-800 hover:cursor-pointer hover:bg-green-700/90">
                    <Link href={"https://wa.me/03021557590"}><Image src={whatsapp} width={20} height={20} alt="Whatsapp" />Contact Us (1)</Link>
                </Button>
                <Button asChild size={"lg"} className="bg-green-800 hover:cursor-pointer hover:bg-green-700/90">
                    <Link href={"https://wa.me/+923438209060"}><Image src={whatsapp} width={20} height={20} alt="Whatsapp" />Contact Us (2)</Link>
                </Button>
            </div>
        </section>
    )
}

export default Contact