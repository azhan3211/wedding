'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Comment() {
    return <div className="flex w-full justify-center py-[80px] bg-design2">
        <div className="w-[1400px] flex flex-col py-[80px]">
            <p className="text-[40px] font-bold text-center">Your whises</p>
            <div className="flex flex-row w-full justify-start items-center gap-x-[20px] mt-[40px]">
                <div className="flex flex-col rounded-[8px] shadow-lg w-[40%] px-[5%] py-[20px] gap-y-2 items-end">
                    <p className="w-full text-[16px]">Enter your name</p>
                    <input type="text" className="border-2 h-[50px] px-[20px] border-[#acacac] rounded-[10px] w-full" />
                    <p className="w-full text-[16px] mt-[20px]">Type your comment</p>
                    <textarea 
                        className="border-2 rounded-[10px] h-[100px] w-full border-[#acacac] p-[20px] align-text-top"/>
                    <button className="w-[200px] h-[50px] font-bold uppercase rounded-[8px] text-white bg-design2-button">Send</button>
                </div>
                <div className="flex flex-col w-[50%] justify-center items-center">
                    <Carousel
                        showArrows={true}
                        showIndicators={true}
                        infiniteLoop={true}
                        dynamicHeight={false}
                        autoPlay={true}
                        interval={3000}
                        transitionTime={2000}>
                        <div className="flex bg-blue-400 flex-col justify-center items-center px-[5%] w-full aspect-[2/1] rounded-[8px] shadow-lg">
                            <p className="font-bold text-white text-[14px]">Joe Doe</p>
                            <p className="text-[18px] text-white mt-[10px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                        </div>
                        <div className="flex bg-orange-400 flex-col justify-center items-center px-[5%] w-full aspect-[2/1] rounded-[8px] shadow-lg">
                            <p className="font-bold text-white text-[14px]">Joe Doe</p>
                            <p className="text-[18px] text-white mt-[10px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                        </div>
                        <div className="flex bg-green-400 flex-col justify-center items-center px-[5%] w-full aspect-[2/1] rounded-[8px] shadow-lg">
                            <p className="font-bold text-white text-[14px]">Joe Doe</p>
                            <p className="text-[18px] text-white mt-[10px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                        </div>
                        
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
}