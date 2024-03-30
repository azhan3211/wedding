import UndanganKuButton from "@/components/button/button";
import UndanganKuInput from "@/components/input/input";
import React, { useState } from "react";
import { MdOutlineMyLocation } from "react-icons/md";

export default function AddressInformationCreate() {

    const [address, setAddress] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    const handleAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }

    const handleLatitude = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLatitude(event.target.value)
    }
    
    const handleLongitude = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLongitude(event.target.value)
    }

    return <div className="w-full flex flex-col mt-[40px] rounded-[8px] p-[20px] shadow-lg border-2 border-gray-300 relative pb-[80px]">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Address Information</p>
        <UndanganKuInput
            label="Address Name"
            value={address}
            onChange={handleAddress}
            type="text"/>
        <div className="w-full flex flex-row gap-x-[20px] justify-center items-center">
            <UndanganKuInput
                label="Latitude"
                value={latitude}
                onChange={handleLatitude}
                type="text"/>
            <UndanganKuInput
                label="Longitude"
                value={longitude}
                onChange={handleLongitude}
                type="text"/>
            <MdOutlineMyLocation className="w-[100px] h-[100px] mt-[10px] cursor-pointer hover:text-main" />
        </div>
        <div className="flex flex-row gap-x-[20px] absolute right-[20px] bottom-[20px]">
            <UndanganKuButton text="Save"/>
        </div>
    </div>
}