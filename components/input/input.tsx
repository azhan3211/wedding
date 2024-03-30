import React, { useState } from "react"

interface UndanganKuInputProps {
    type: string
    label: string
    value?: string
    isError?: boolean
    errorMessage?: string
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
}

export default function UndanganKuInput({ type, label, value, errorMessage, onChange, isError }: UndanganKuInputProps) {

    return <div className="w-full flex flex-col">
        <p className="text-[20px] text-gray-600">{label}</p>
        <input 
            type={type} 
            className={`${ isError ? 'border-red-600' : 'border-gray-300' } w-full px-[20px] mt-[10px] rounded-[8px] border-2 focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent h-[50px] bg-transparent text-gray-600`} 
            value={value}
            onChange={onChange}/>
        <p className={`text-red-800 text-[14px] ${ isError ? 'visible' : 'invisible'}`}>{ errorMessage && errorMessage || 'Cannot be blank' }</p>
    </div>
}