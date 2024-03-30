'use client';

import { useState } from "react"
import Design2 from "../design2";

interface GalleriesProps {
    images: Array<string>
}

export default function Galleries({ images }: GalleriesProps) {

    // Use state for selected index if needed
    const [selectedIndex, setSelectedIndex] = useState(0);

    function changeImage(index: number) {
        setSelectedIndex(index)
    }

    return <Design2 backgroundImage="flower">
        <div className="flex flex-col py-[80px] w-[1400px] items-center justify-center">
            <p className="text-[40px] font-bold">Praweding Photos</p>
            <div className="flex flex-row">
                <div className="grid grid-cols-4 grid-rows-4 w-[50%] p-[5%] gap-[20px] justify-center items-center space-y-0">
                    {
                        images.map((image, index) => {
                            return <img 
                                onClick={() => changeImage(index)}
                                src={image} 
                                className={
                                    `w-full rounded-[8px] shadow-lg 
                                    cursor-pointer aspect-[1/1] object-cover
                                    ${selectedIndex == index ? "border-4 border-orange-300" : "opacity-60"}`
                                }/>
                        })
                    }
                </div>
                <div className="flex w-[50%] p-[5%]">
                    <img src={images[selectedIndex]} className="w-full rounded-[8px] aspect-[1/1] object-cover"/>
                </div>
            </div>
        </div>
    </Design2>
}