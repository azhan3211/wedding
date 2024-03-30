import UndanganKuButton from "@/components/button/button";
import UndanganKuInput from "@/components/input/input";
import { useState } from "react";

export default function QuoteInformationCreate() {

    const [quote, setQuote] = useState("")
    const [quoteOwner, setQuoteOwner] = useState("")

    const handleQuote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuote(event.target.value)
    }

    const handleQuoteOwner = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuoteOwner(event.target.value)
    }

    return <div className="w-full flex flex-col mt-[40px] rounded-[8px] p-[20px] shadow-lg border-2 border-gray-300 relative pb-[80px]">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Quote Information</p>
        <p className="text-[20px] text-gray-600 mb-[10px]">Quote</p>
        <textarea 
            className="w-full h-[200px] px-[20px] py-[10px] text-gray-600 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent border-gray-300 border-2 mb-[20px]"
            value={quote}
            onChange={handleQuote}/>
        <UndanganKuInput
            label="Quote Owner"
            value={quoteOwner}
            onChange={handleQuoteOwner}
            type="text"/>
        <div className="flex flex-row gap-x-[20px] absolute right-[20px] bottom-[20px]">
            <UndanganKuButton text="Save"/>
        </div>
    </div>
}