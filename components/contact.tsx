import UndanganKuInput from "./input/input";
import { AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

export default function ContactComponent() {
    return <div className="w-full flex flex-col items-center mb-[40px] pt-[40px] md:mx-0 mx-[20px]">
        <p className="text-gray-600 font-bold text-[40px]">Hubungi Kami</p>
        <div className="flex flex-col gap-y-[40px] lg:flex-row shadow-lg w-full p-[20px] rounded-[20px] mt-[20px] border-2 border-gray-3">
            <div className="w-full lg:w-[50%] relative h-fit lg:h-full bg-main rounded-[20px] lg:pl-[20px] p-[20px] lg:mr-[20px] overflow-hidden">
                <p className="text-white text-[28px] font-bold">Informasi Kontak</p>
                <p className="text-white text-[20px] mt-[20px]">Untuk pertanyaan lebih lanjut atau informasi tentang layanan kami, silakan hubungi kami melalui:</p>
                <div className="flex flex-row gap-x-[10px] justify-center items-center w-fit mt-[20px]">
                    <AiOutlineInstagram className="size-[32px] w-[32px] h-[32px] mr-[10px] text-white"/>
                    <p className="text-white text-[16px]">@undanganku</p>
                </div>
                <div className="flex flex-row gap-x-[10px] justify-center items-center w-fit mt-[20px]">
                    <AiOutlineWhatsApp className="size-[32px] w-[32px] h-[32px] mr-[10px] text-white"/>
                    <div className="flex flex-col w-fit">
                        <p className="text-white text-[16px]">0851-5803-6448</p>
                        <p className="text-white text-[16px]">0851-5803-6448</p>
                    </div>
                </div>
                <div className="flex flex-row gap-x-[10px] justify-center items-center w-fit mt-[20px]">
                    <AiOutlineMail className="size-[32px] w-[32px] h-[32px] text-white mr-[10px]"/>
                    <p className="text-white text-[16px]">undanganku@email.com</p>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full flex flex-row gap-x-[20px]">
                    <UndanganKuInput label="Your Name" type="text"/>
                    <UndanganKuInput label="Email" type="text"/>
                </div>
                <div className="w-full h-[20px]"/>
                <UndanganKuInput label="Subject" type="text"/>
                <p className="text-[20px] mt-[20px] text-gray-600">Message</p>
                <textarea name="" id="" className="w-full h-[200px] rounded-[8px] border-2 border-gray-300 mt-[20px] focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent p-[20px]"/>
                <button className="w-fit h-[50px] hover:bg-secondary uppercase text-white px-[20px] text-[20px] font-bold bg-main rounded-[8px] mt-[20px]">Kirim Pesan</button>
            </div>
        </div>
    </div>
}