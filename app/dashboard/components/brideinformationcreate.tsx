import UndanganKuButton from "@/components/button/button";
import UndanganKuInput from "@/components/input/input";
import { useRef, useState } from "react";

export default function BrideInformationCreate() {


    const [description1, setDescription1] = useState("")
    const [description2, setDescription2] = useState("")
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [instagram1, setInstagram1] = useState("")
    const [instagram2, setInstagram2] = useState("")
    const [images1, setImages1] = useState<string[]>([])
    const [images2, setImages2] = useState<string[]>([])
    const images1Ref = useRef<HTMLInputElement>(null)
    const images2Ref = useRef<HTMLInputElement>(null)
    const [imageIndex1, setImageIndex1] = useState(-1)
    const [imageIndex2, setImageIndex2] = useState(-1)

    const handleName1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName1(event.target.value)
    }

    const handleName2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName2(event.target.value)
    }

    const handleInstagram1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInstagram1(event.target.value)
    }

    const handleInstagram2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInstagram2(event.target.value)
    }

    const handleDescription1 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription1(event.target.value)
    }

    const handleDescription2 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription2(event.target.value)
    }

    const handleImage1 = (index: number) => {
        if (images1Ref.current) {
            images1Ref.current.click()
            setImageIndex1(index)
        }
    }

    const handleImage2 = (index: number) => {
        if (images2Ref.current) {
            images2Ref.current.click()
            setImageIndex2(index)
        }
    }

    const handleImage1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const image = URL.createObjectURL(e.target.files[0])
            const newImages = [...images1]
            if (imageIndex1 === -1) {
                newImages.push(image)
            } else {
                newImages[imageIndex1] = image
            }
            setImages1(newImages)
        }
    }
    
    const handleImage2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const image = URL.createObjectURL(e.target.files[0])
            const newImages = [...images2]
            if (imageIndex2 === -1) {
                newImages.push(image)
            } else {
                newImages[imageIndex2] = image
            }
            setImages2(newImages)
        }
    }

    return <div className="w-full flex flex-col mt-[80px] rounded-[8px] px-[20px] pt-[20px] shadow-lg relative pb-[80px] border-2 border-gray-300">
            <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Bride Information</p>
            <div className="w-full flex flex-row gap-x-[20px]">
                <div className="flex flex-col w-full">
                    <UndanganKuInput
                        label="Person 1"
                        value={name1}
                        onChange={handleName1}
                        type="text"/>
                    <p className="text-[20px] text-gray-600 mb-[10px]">Photos</p>
                    <div className="w-full grid grid-cols-4 gap-[20px] mb-[20px]">
                        {
                            images1.map((image, index) => (
                                <img src={image} alt="" className="w-full bg-gray-300 rounded-[8px] h-[100px] cursor-pointer" onClick={() => handleImage1(index)}/>
                            ))
                        }
                        {
                            Array.from({ length: 4 - images1.length}, () => {
                                return <div onClick={() => handleImage1(-1)} className="w-full bg-gray-300 rounded-[8px] h-[100px] cursor-pointer"/>
                            })
                        }
                        <input
                            ref={images1Ref}
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImage1Change}/>
                    </div>
                    <UndanganKuInput
                        label="Instagram"
                        value={instagram1}
                        onChange={handleInstagram1}
                        type="text"/>
                    <p className="text-[20px] text-gray-600 mb-[10px]">Description</p>
                    <textarea 
                        className="w-full h-[200px] px-[20px] py-[10px] text-gray-600 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent border-gray-300 border-2 mb-[20px]"
                        value={description1}
                        onChange={handleDescription1}/>
                </div>
                <div className="flex flex-col w-full">
                    <UndanganKuInput
                        label="Person 1"
                        value={name2}
                        onChange={handleName2}
                        type="text"/>
                    <p className="text-[20px] text-gray-600 mb-[10px]">Photos</p>
                    <div className="w-full grid grid-cols-4 gap-[20px] mb-[20px]">
                        {
                            images2.map((image, index) => (
                                <img src={image} alt="" className="w-full bg-gray-300 rounded-[8px] h-[100px] cursor-pointer" onClick={() => handleImage2(index)}/>
                            ))
                        }
                        {
                            Array.from({ length: 4 - images2.length}, () => {
                                return <div onClick={() => handleImage2(-1)} className="w-full bg-gray-300 rounded-[8px] h-[100px] cursor-pointer"/>
                            })
                        }
                        <input
                            ref={images2Ref}
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImage2Change}/>
                    </div>
                    <UndanganKuInput
                        label="Instagram"
                        value={instagram2}
                        onChange={handleInstagram2}
                        type="text"/>
                    <p className="text-[20px] text-gray-600 mb-[10px]">Description</p>
                    <textarea 
                        className="w-full h-[200px] px-[20px] py-[10px] text-gray-600 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent border-gray-300 border-2 mb-[20px]"
                        value={description2}
                        onChange={handleDescription2}/>
                </div>
            </div>
            <div className="absolute right-[20px] bottom-[20px]">
                <UndanganKuButton text="Save"/>
            </div>
        </div>
}