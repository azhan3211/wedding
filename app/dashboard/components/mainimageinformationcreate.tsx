import UndanganKuButton from "@/components/button/button";
import { useRef, useState } from "react";

export default function MainImageInformationCreate() {

    const [image, setImage] = useState("")
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleImageClicked = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return <div className="w-full flex flex-col mt-[80px] rounded-[8px] px-[20px] pt-[20px] shadow-lg relative pb-[80px] border-2 border-gray-300">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Main Image Information</p>
        <div className="flex flex-col w-[50%] relative h-fit justify-center items-center cursor-pointer" onClick={handleImageClicked}>
            <img src={image && image || ""} alt="" className={`w-full bg-gray-300 rounded-[8px] ${ image && "aspect-auto" || "aspect-[1]"}`}/>
            <p className={`text-[18px] w-fit h-fit font-bold absolute left-0 right-0 ms-auto me-auto`}>{ image && "Change Image" || "Select Image" }</p>
            <input
                ref={fileInputRef}
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}/>
        </div>
        <div className="flex flex-row gap-x-[20px] absolute right-[20px] bottom-[20px]">
            <UndanganKuButton text="Save"/>
        </div>
    </div>
}