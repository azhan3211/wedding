'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface BrideInfoProps {
    maleImages: Array<string>
    femaleImages: Array<string>
}

export default function BrideInfo({ maleImages, femaleImages }: BrideInfoProps) {

    const instagramIcon = "../images/instagram.png"

    return <div className="flex bg-design2 flex-col w-full justify-center items-center">
        <div className="flex flex-col w-[1400px]">
            <div className="flex w-full relative">
                <div className="w-[50%]"></div>
                <div className="flex flex-row w-[50%] justify-center items-center">
                    <p className="w-[20%] transform -rotate-90 text-[40px]">Joe Satriani</p>
                    <div className="relative w-[80%] rounded-bl-[180px]">
                        <Carousel
                            showArrows={false}
                            showIndicators={false}
                            infiniteLoop={true}
                            dynamicHeight={false}
                            showThumbs={false}
                            autoPlay={true}
                            showStatus={false}
                            interval={3000}
                            transitionTime={2000}>
                                {
                                    maleImages.map((image, index) => {
                                        return <img src={image} className="aspect-[1/1.8] object-cover w-full rounded-bl-[180px]"/>
                                    })
                                }
                        </Carousel>
                        <div className="flex flex-col absolute bottom-[40px] w-[400px] right-[40px] justify-end items-end">
                            <p className="text-[28px] font-bold text-white">Joe Satriani S.Kom</p>
                            <p className="text-[18px] text-white text-end w-[300px]">Anak ke empat dari bapak A.sirait dan Ibu St. R. Sidabutar, S.Pd.</p>
                            <img src={instagramIcon} className="size-[20px] fill-white mt-[10px] cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full relative">
                <div className="flex flex-row w-[50%] justify-center items-center">
                    <div className="flex relative w-[80%] rounded-br-[180px]">
                        <Carousel
                            showArrows={false}
                            showIndicators={false}
                            infiniteLoop={true}
                            dynamicHeight={false}
                            showStatus={false}
                            showThumbs={false}
                            autoPlay={true}
                            interval={3000}
                            transitionTime={2000}>
                                {
                                    femaleImages.map((image, index) => {
                                        return <img src={image} className="rounded-br-[180px] aspect-[1/1.8] object-cover w-full"/>
                                    })
                                }
                        </Carousel>
                        <div className="flex flex-col absolute bottom-[40px] left-[20px] w-[400px]">
                            <p className="text-[28px] font-bold text-white">Joe Satriani S.Kom</p>
                            <p className="text-[18px] text-white w-[300px]">Anak ke empat dari bapak A.sirait dan Ibu St. R. Sidabutar, S.Pd.</p>
                            <img src={instagramIcon} className="size-[20px] invert-0 mt-[10px] cursor-pointer" />
                        </div>
                    </div>
                    <p className="w-[20%] transform rotate-90 text-[40px]">Joe Satriani</p>
                </div>
                <div className="w-[50%]"></div>
            </div>
        </div>
    </div>
}