import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import Image from "next/image"
import image2 from "../../../public/slide-2.jpg"
import langPic from "../../../public/multi-lingual.jpg"
import car from "../../../public/car.jpg"


const Services = () => {
    return (
        <section className="bg-green-700" id="services">
            <h1 className="text-4xl py-6 text-center font-black">Our Services</h1>
            <Carousel className="m-auto w-5/8 pb-9">
                <CarouselContent>
                    <CarouselItem>
                        <Card className="bg-gray-100">
                            <CardHeader>
                                <CardTitle className="text-2xl">Tour All Over <span className="text-green-700">Pakistan</span></CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center">
                                <Image src={image2} alt="Beautiful Scenery Pakistan" height={150} width={200} />
                                <p className="pt-4">We provide you with the best services at reasonable prices.</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className="bg-gray-100">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Multi-lingual Drivers</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center">
                                <Image src={langPic} alt="Beautiful Scenery Pakistan" height={100} width={150} />
                                <p>Our drivers speak English, Arabic, Urdu and Pashto. Say no to language barriers!</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                    <CarouselItem>
                        <Card className="bg-gray-100">
                            <CardHeader>
                                <CardTitle className="text-2xl text-center">Rent A Car</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col items-center">
                                <Image src={car} alt="Beautiful Scenery Pakistan" height={100} width={150} />
                                <p>Need a rental car for your trip? We got you covered!</p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-green-800 ml-1" />
                <CarouselNext className="bg-green-800 mr-1" />
            </Carousel>

        </section>
    )
}

export default Services