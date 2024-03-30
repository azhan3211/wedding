interface Hero4Props {
    src: string
}

export default function Hero4({ src }: Hero4Props) {
    return <div className="flex flex-row w-full h-screen">
        <div className="flex flex-col justify-center w-[50%] gap-y-[20px] h-screen bg-orange-200 p-[120px]">
            <p className="text-[40px] font-bold text-gray-500">Tahan & Cari</p>
            <p className="text-gray-500 text-[20px] font-semibold">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ Artinya: “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.” (QS. Ar-Rum: 21)</p>
        </div>
        <div className="relative w-[50%] h-screen">
            <img src={src} className="w-full h-full object-cover" />
            <div className="flex flex-col w-fit absolute bottom-0 left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white rounded-[8px] py-[20px]">
                <div className="flex flex-row">
                    <div className="flex flex-col w-[100px] h-[100px] justify-center items-center">
                        <p className="text-[20px] w-fit">Hari</p>
                        <p className="text-[32px] w-fit">20</p>
                    </div>
                    <div className="flex flex-col w-[100px] h-[100px] justify-center items-center">
                        <p className="text-[20px] w-fit">Jam</p>
                        <p className="text-[32px] w-fit">20</p>
                    </div>
                    <div className="flex flex-col w-[100px] h-[100px] justify-center items-center">
                        <p className="text-[20px] w-fit">Menit</p>
                        <p className="text-[32px] w-fit">20</p>
                    </div>
                    <div className="flex flex-col w-[100px] h-[100px] justify-center items-center">
                        <p className="text-[20px] w-fit">Detik</p>
                        <p className="text-[32px] w-fit">20</p>
                    </div>
                </div>
                <div className="w-[100% - 40px] mx-[20px] py-[10px] border-black border-2">
                    <p className="w-full text-center">Sabtu, 11 September 2024</p>
                </div>
            </div>
        </div>
    </div>
}