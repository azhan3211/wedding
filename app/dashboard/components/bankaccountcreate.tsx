import UndanganKuInput from "@/components/input/input";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

interface BackAccountCreateProps {
    onNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBankNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onRemove: () => void
    bankAccount: BankAccountModel
}

export class BankAccountModel {
    constructor(
        readonly name: string,
        readonly bankName: string,
        readonly number: string
    ) {}
}

export default function BankAccountCreate({ bankAccount, onNameChange, onBankNameChange, onNumberChange, onRemove }: BackAccountCreateProps) {
    return <div className="w-full flex flex-row gap-x-[20px]">
        <UndanganKuInput
            label="Name"
            type="text"
            value={bankAccount.name}
            onChange={onNameChange}/>
        <UndanganKuInput
            label="Bank Name"
            type="text"
            value={bankAccount.bankName}
            onChange={onBankNameChange}/>
        <UndanganKuInput
            label="Account Number"
            type="text"
            value={bankAccount.number}
            onChange={onNumberChange}/>
        <button
            onClick={onRemove}
            className="h-[50px] w-[50px] mt-[35px] flex items-center justify-center text-red-600 font-bold">
            <AiOutlineDelete className="h-[50px] w-[50px]"/>
        </button>
    </div>
}