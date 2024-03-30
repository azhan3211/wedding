export default function Category() {
    return <div className="flex flex-col 2xl:w-[1400px]  mb-[40px]">
        <p className="text-[40px] text-center mb-[40px] text-gray-600 font-semibold">Mau Buat Undangan Apa?</p>
        <div className="grid grid-cols-2 gap-x-[20px] 2xl:grid-cols-4 md:grid-cols-2 w-full md:gap-[40px] gap-y-[40px] md:px-0 px-[20px]">
            <div className="flex flex-col w-full bg-white rounded-[8px] cursor-pointer shadow-lg justify-center items-center hover:border-2 hover:border-main border-2 border-gray-300">
                <img src="../images/hero-dummy.jpg" className="rounded-t-[8px]" />
                <p className="py-[20px] w-full text-center text-[20px] text-gray-600 font-semibold">Wedding</p>
            </div>
            <div className="flex flex-col w-full bg-white rounded-[8px] cursor-pointer shadow-lg justify-center items-center opacity-50">
                <img src="../images/hero-dummy.jpg" className="rounded-t-[8px]" />
                <p className="py-[20px] w-full text-center text-[20px] text-gray-600 font-semibold">Coming Soon</p>
            </div>
            <div className="flex flex-col w-full bg-white rounded-[8px] cursor-pointer shadow-lg justify-center items-center opacity-50">
                <img src="../images/hero-dummy.jpg" className="rounded-t-[8px]" />
                <p className="py-[20px] w-full text-center text-[20px] text-gray-600 font-semibold">Coming Soon</p>
            </div>
            <div className="flex flex-col w-full bg-white rounded-[8px] cursor-pointer shadow-lg justify-center items-center opacity-50">
                <img src="../images/hero-dummy.jpg" className="rounded-t-[8px]" />
                <p className="py-[20px] w-full text-center text-[20px] text-gray-600 font-semibold">Coming Soon</p>
            </div>
        </div>
    </div>
}