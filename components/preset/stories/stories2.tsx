interface Stories2Props {
    images: Array<string>
}

export default function Stories2({ images }: Stories2Props) {
    return <div className="flex w-full justify-center bg-design2-secondary">
        <div className="flex flex-row py-[80px] gap-x-[80px] w-[1400px] items-center justify-center">
            <p className="w-[100px] text-[40px] font-bold uppercase">See Our Moments</p>
            <div className="grid grid-cols-3 grid-rows-1 w-[70%] p-[5%] gap-[50px] justify-center items-center space-y-0">
                {
                    images.map((image, index) => {
                        return <div className="flex relative">
                            <img src={image} className="w-full cursor-pointer aspect-[1/1.5] rounded-[180px] object-cover"/>
                            <p className="rounded-[50%] bg-gray-200 text-center w-[120px] h-[120px] text-[80px] absolute bottom-0 right-[-30px]">{ "0" + (index + 1) }</p>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}