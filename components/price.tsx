export default function Price() {
    return <div className="w-full flex flex-col justify-center items-center mb-[40px] pt-[40px]">
        <p className="text-[40px] uppercase mb-[40px] text-gray-600 font-semibold text-center">Pilih Paket</p>
        <div className="w-full gap-x-[20px] px-[20px] md:px-0 md:gap-y-0 gap-y-[20px] flex md:flex-row flex-col justify-center items-center">
            <div className="w-full flex h-[480px] flex-col justify-center items-center py-[40px] bg-white rounded-[20px] shadow-lg border-[#FFC700] border-2">
                <p className="text-[20px] font-bold text-gray-600">Simple</p>
                <p className="w-full py-[20px] text-[20px] font-bold mt-[20px] text-center bg-[#FFC700] text-white">Rp.39.000</p>
                <ul className="flex flex-col text-center h-[300px] justify-center items-center mt-[20px] gap-y-[5px] text-gray-600">
                    <li>Up to 5 gambar</li>
                    <li>Daftar Kehadiran</li>
                    <li>Masa Aktif 1 Bulan</li>
                </ul>
                <button className="bg-main mt-[20px] h-[50px] w-fit px-[20px] text-white rounded-[10px] text-[20px] font-bold uppercase hover:bg-secondary">Beli Sekarang</button>
            </div>
            <div className="relative w-full h-[500px] flex flex-col justify-center items-center py-[40px] bg-white rounded-[20px] shadow-lg border-main border-2">
                <p className="text-[20px] font-bold text-gray-600">Simple</p>
                <p className="w-full py-[20px] text-[20px] font-bold mt-[20px] text-center bg-main text-white">Rp.79.000</p>
                <ul className="flex flex-col text-center h-[300px] justify-center items-center mt-[20px] gap-y-[5px] text-gray-600">
                    <li>Up to 10 gambar</li>
                    <li>Daftar Kehadiran</li>
                    <li>Tag Nama Tamu Di Undangan</li>
                    <li>Scan Tamu Undangan</li>
                    <li>Masa Aktif 3 Bulan</li>
                </ul>
                <button className="bg-main mt-[20px] h-[50px] w-fit px-[20px] text-white rounded-[10px] text-[20px] font-bold uppercase hover:bg-secondary">Beli Sekarang</button>
                <p className="text-white text-[14px] font-bold absolute right-[-10px] rounded-l-[20px] top-[20px] bg-main py-[10px] pl-[15px] pr-[20px]">Recommended</p>
            </div>
            <div className="w-full flex h-[480px] flex-col justify-center items-center py-[40px] bg-white rounded-[20px] shadow-lg border-[#FFC700] border-2">
                <p className="text-[20px] font-bold text-gray-600">Simple</p>
                <p className="w-full py-[20px] text-[20px] font-bold mt-[20px] text-center bg-[#FFC700] text-white">Rp.149.000</p>
                <ul className="flex flex-col text-center h-[300px] justify-center items-center mt-[20px] gap-y-[5px] text-gray-600">
                    <li>Up to 20 Gambar</li>
                    <li>Daftar Kehadiran</li>
                    <li>Tag Nama Tamu Di Undangan</li>
                    <li>Scan Tamu Undangan</li>
                    <li>Masa Aktif 1 tahun</li>
                    <li>1 Video</li>
                </ul>
                <button className="bg-main mt-[20px] h-[50px] w-fit px-[20px] text-white rounded-[10px] text-[20px] font-bold uppercase hover:bg-secondary">Beli Sekarang</button>
            </div>
        </div>
    </div>
}