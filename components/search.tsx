import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

interface SearchProps {
    onSearch: (value: string) => void
}

export default function SearchComponent({ onSearch }: SearchProps) {

    const [keyword, setKeyword] = useState("")

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value)
    }

    return <div className="relative w-full h-[70px] flex flex-col justify-center items-center mb-[80px]">
        <input
            className="w-full h-full rounded-[8px] ps-[20px] pe-[100px] border-2 focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent text-gray-600"
            value={keyword}
            onChange={handleKeywordChange}/>
        <button className="absolute right-[20px]" onClick={() => onSearch}>
            <GoSearch className="w-[30px] h-[30px] text-gray-600"/>
        </button>
    </div>
}