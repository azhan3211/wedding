interface Hero3Props {
    src: string
}

export default function Hero3({ src }: Hero3Props) {
    return <div className="w-full bg-white relative flex flex-col mb-[280px]">
        <div className="w-full flex bg-cyan-400 aspect-[2/0.7] justify-center">
            <div className="w-[1400px] flex flex-col justify-center items-center h-fit mt-[40px]">
                <ul className="flex flex-row gap-x-[20px]">
                    <li className="text-[20px] font-bold text-white cursor-pointer">Home</li>
                    <li className="text-[20px] font-bold text-white cursor-pointer">Menu 1</li>
                    <li className="text-[20px] font-bold text-white cursor-pointer">Menu 2</li>
                    <li className="text-[20px] font-bold text-white cursor-pointer">Menu 3</li>
                    <li className="text-[20px] font-bold text-white cursor-pointer">Menu 4</li>
                </ul>
                <p className="text-[32px] font-bold text-white mt-[150px]">
                    Joe and Joe
                </p>
                <p className="text-[20px] text-white font-semibold">are getting merried</p>
                <img src="../images/flower_top_left.png" className="absolute top-0 left-0" />
                <img src="../images/flower_bottom_left.png" className="absolute bottom-0 left-0" />
                <img src="../images/flower_top_left.png" className="absolute scale-x-[-1] top-0 right-0" />
                <img src="../images/flower_bottom_left.png" className="absolute scale-x-[-1] bottom-0 right-0" />
            </div>
            <div className="w-[1400px] absolute bottom-[-250px] shadow-lg rounded-[20px]">
                <img src={src} className="w-full aspect-[2/0.8] rounded-[20px] object-cover"/>
            </div>
        </div>
    </div>
}