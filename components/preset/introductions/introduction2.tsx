export default function Introduction2() {
    return <div className="flex flex-col p-[80px] bg-white w-full justify-center items-center">
        <div className="flex flex-col w-[1400px] justify-center items-center">
            <div className="flex flex-row w-full">
                <div className="flex flex-col justify-center items-center w-[49%]">
                    <img
                        src="images/hero-dummy.jpg" 
                        className="w-[400px] aspect-[1/1.5] object-cover rounded-t-[80px] shadow-lg"/>
                </div>
                <div className="w-[1px] bg-gray-400 h-[550px]"></div>
                <div className="flex flex-col w-[49%] p-[5%]">
                    <p className="text-[80px]">Joe & Joe</p>
                    <p className="w-full text-[20px]">Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet, Lorem ipsum dolor amet.</p>
                    <button className="px-[20px] py-[5px] bg-orange-400 w-fit rounded-[20px] uppercase text-white font-bold mt-[20px]">Simpan acara ke kalender</button>
                </div>
            </div>
            <div className="flex flex-row w-full mt-[20px] justify-center items-center gap-x-[80px]">
                <div className="flex-grow h-[1px] bg-gray-400"/>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[18px] uppercase">See you there</p>
                    <p className="text-[24px]">September 11, 2024</p>
                </div>
                <div className="flex-grow h-[1px] bg-gray-400"/>
            </div>
        </div>
    </div>
}