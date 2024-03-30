import UndanganKuButton from "@/components/button/button";
import { useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function GalleryInformationCreate() {

    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);

            const imagePreviewsArray = files.map((file) => {
                return URL.createObjectURL(file);
            });

            setImagePreviews((prevPreviews) => [...prevPreviews, ...imagePreviewsArray]);
        }
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const removeImage = (index: number) => {
        const updatedPreviews = [...imagePreviews];
        updatedPreviews.splice(index, 1);
        setImagePreviews(updatedPreviews);
    };

    return <div className="w-full flex flex-col mt-[40px] rounded-[8px] p-[20px] shadow-lg relative pb-[120px] border-2 border-gray-300">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Galleries</p>
        <div className='grid grid-cols-3 w-full'>
            {imagePreviews.map((preview, index) => (
                <div key={index} className="w-full p-2 relative">
                    <button
                        onClick={() => removeImage(index)}
                        className="absolute top-[20px] right-[20px] bg-red-500 rounded-[50%] h-[40px] w-[40px] shadow-lg flex items-center justify-center text-white font-bold">
                        <AiOutlineDelete className="w-[30px] h-[30px]"/>
                    </button>
                    <img src={preview} alt={`Preview ${index}`} className="w-full object-cover aspect-[1/1] rounded-lg" />
                </div>
            ))}
        </div>
        <div className="absolute right-[20px] bottom-[20px]">
            <UndanganKuButton text="Add" onClick={handleButtonClick} />
            <input
                ref={fileInputRef}
                id="imageUpload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageChange}
            />
        </div>
    </div>
}