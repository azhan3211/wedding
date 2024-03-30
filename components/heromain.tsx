export default function HeroMainComponent() {
    return <div className='w-full flex flex-col h-[400px] justify-center items-center'>
        <p className='text-[48px] text-gray-600 text-center'>Sebar banyak undangan <b className='text-main'>sekali kirim</b></p>
        <p className='text-[20px] text-gray-600 text-center'>Cuma <b className='text-main'>5 menit</b>. Daftar, pilih desain, sebar undangan.</p>
        <a href="/login">
            <button className='bg-main hover:bg-secondary text-white text-[20px] px-[20px] h-[50px] rounded-[8px] mt-[20px]'>Buat Sekarang</button>
        </a>
    </div>
}