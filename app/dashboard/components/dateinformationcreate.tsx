import UndanganKuButton from "@/components/button/button";
import UndanganKuInput from "@/components/input/input";
import { useState } from "react";

export default function DateInformationCreate() {

    const [date, setDate] = useState("")
    
    const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value)
    }

    return <div className="w-full flex flex-col mt-[40px] rounded-[8px] p-[20px] shadow-lg border-2 border-gray-300 relative pb-[80px]">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Date Information</p>
        <div className="w-[50%] flex flex-row gap-x-[20px]">
            <UndanganKuInput
                label="Date"
                value={date}
                onChange={handleDate}
                type="date"/>
        </div>
        <div className="flex flex-row gap-x-[20px] absolute right-[20px] bottom-[20px]">
            <UndanganKuButton text="Save"/>
        </div>
    </div>
}