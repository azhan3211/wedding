import { ReactNode } from "react";

interface Design2Props {
    children: ReactNode
    backgroundColor?: string
    backgroundImage?: string
}

export default function Design2({ children, backgroundImage = 'bg-flower', backgroundColor = 'design2' }: Design2Props) {
    return <div className={`flex flex-col bg-${backgroundImage} bg-no-repeat bg-cover w-full justify-center p-[80px] items-center h-screen relative`}>
        <div className={`w-full h-screen absolute top-0 bg-${backgroundColor} opacity-70 z-0`}/>
        <div className="flex flex-col w-[1400px] justify-center items-center z-10">
        { children }
        </div>
    </div>
}