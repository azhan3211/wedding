import UndanganKuInput from "@/components/input/input";
import React, { useRef, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

interface EventComponentProps {
    onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChangeDate: (event: React.ChangeEvent<HTMLInputElement>) => void
    onImageSelected: (image: string) => void
    onRemove: () => void
    event: EventCreateModel
}

export class EventCreateModel {
    constructor(
        readonly name?: string,
        readonly date?: string,
        readonly photos?: string
    ) {}
}

export default function EventComponent({ onChangeName, onChangeDate, onRemove, onImageSelected, event }: EventComponentProps) {

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedImage = URL.createObjectURL(e.target.files[0])
            onImageSelected(selectedImage)
        }
    }

    const handleImageClicked = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return <div className="w-full flex flex-row gap-x-[20px] relative py-[20px]">
        <div className="w-[50%] flex flex-col gap-y-[20px]">
            <UndanganKuInput
                label="Name"
                value={event.name}
                onChange={onChangeName}
                type="text"/>
            <UndanganKuInput
                label="Date"
                value={event.date}
                onChange={onChangeDate}
                type="date"/>
        </div>
        <div className="flex flex-col w-[50%] justify-center items-center gap-y-[20px] relative">
            <p className="text-[20px] text-gray-600">Photos</p>
            <div className="flex flex-col relative w-full h-full justify-center items-center">
                <img src={event.photos || ""} alt="" className="w-[200px] bg-gray-200 aspect-[1] rounded-[50%] shadow-lg h-full cursor-pointer" onClick={handleImageClicked}/>
                <p className={`absolute left-0 h-fit w-fit right-0 ms-auto me-auto font-bold text-${ !event.photos && 'black' || 'white'} ${ !event.photos && 'bg-tranparent' || 'bg-black opacity-75'} cursor-pointer`} onClick={handleImageClicked}>{ !event.photos  && "Add Image" || "Change Image"}</p>
            </div>
        </div>
        <button
            onClick={onRemove}
            className="absolute top-[20px] right-[20px] bg-red-500 rounded-[50%] h-[40px] w-[40px] shadow-lg flex items-center justify-center text-white font-bold">
            <AiOutlineDelete className="w-[30px] h-[30px]"/>
        </button>
        <div className="w-full h-[1px] bg-gray-300 absolute bottom-0"/>
        <input
                ref={fileInputRef}
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}/>
    </div>
}