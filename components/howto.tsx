export default function HowToComponent() {
    return <div className="w-full flex flex-col pt-[40px] gap-y-[20px] md:px-0 px-[20px] mb-[40px]">
        <p className="text-[40px] text-center mb-[20px] text-gray-600 font-semibold">Caranya</p>
        <div className="w-full flex flex-col lg:flex-row rounded-[20px] shadow-lg border-2 border-gray-200 lg:h-[500px] lg:p-0 pb-[40px]">
            <div className="w-full lg:order-1 order-2 flex flex-col justify-center items-center px-[20px]">
                <p className="text-[48px] w-full text-gray-600">Login/Register</p>
                <p className="text-gray-600 text-[20px] justify-center items-center">Gunakan email untuk login <a href="/login" className="text-main font-bold cursor-pointer">di sini</a> atau jika belum memiliki akun lakukan registrasi dengan klik <a href="/signup" className="text-main font-bold cursor-pointer">di sini</a>.</p>
            </div>
            <img src="../images/step-1.svg" className="aspect-[1] h-full" />
        </div>
        <div className="w-full flex flex-col lg:flex-row rounded-[20px] shadow-lg border-2 border-gray-200 lg:h-[500px] lg:p-0 pb-[40px]">
            <img src="../images/step-2.svg" className="aspect-[1] h-full" />
            <div className="w-full lg:order-1 order-2 flex flex-col justify-center items-center px-[20px]">
                <p className="text-[48px] w-full text-gray-600">Pilih Desain</p>
                <p className="text-gray-600 text-[20px]">Pilih desain undangan. Di sini kami mengkategorikan undangan berdasarkan kegunaannya. Bisa memilih desain yang telah disediakan atau bisa request sesuai keinginan dengan cara menhubungi kontak <a href="/home#contact" className="font-bold text-main">di sini</a>.</p>
            </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row rounded-[20px] shadow-lg border-2 border-gray-200 lg:h-[500px] lg:p-0 pb-[40px]">
            <div className="lg:order-1 order-2 w-full flex flex-col justify-center items-center px-[20px]">
                <p className="text-[48px] w-full text-gray-600">Bayar</p>
                <p className="text-gray-600 text-[20px]">Setelah memilih desain, lakukan pembayaran. Kami memiliki paket yang bisa anda pilih sesuai kebutuhan anda. Masing-masing paket memiliki fitur-fitur sesuai dengan harga yang anda pilih. Cek harga paket <a href="/home#price" className="font-bold text-main">di sini</a>.</p>
            </div>
            <img src="../images/step-3.svg" className="aspect-[1] h-full" />
        </div>
        <div className="w-full flex flex-col lg:flex-row rounded-[20px] shadow-lg border-2 border-gray-200 lg:h-[500px] lg:p-0 pb-[40px]">
            <img src="../images/step-4.svg" className="aspect-[1] h-full" />
            <div className="w-full flex flex-col justify-center items-center px-[20px]">
                <p className="text-[48px] w-full text-gray-600">Sebar Undangan</p>
                <p className="text-gray-600 text-[20px]">Semuanya sudah siap. Sebarkan undangan anda ke semua tamu yang anda daftarkan. Biarkan mereka liat undangan digital yang menarik tentang momen terbaik anda dengan harga yang terjangkau.</p>
            </div>
        </div>
    </div>
}