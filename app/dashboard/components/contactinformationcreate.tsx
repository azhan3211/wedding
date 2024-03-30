import UndanganKuButton from "@/components/button/button";
import UndanganKuInput from "@/components/input/input";
import React, { useState } from "react";
import BankAccountCreate, { BankAccountModel } from "./bankaccountcreate";

export default function ContactInformationCreate() {

    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [bankAccounts, setBankAccounts] = useState<BankAccountModel[]>([])

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleNameBankAccountChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newBankAccounts = [...bankAccounts]
        newBankAccounts[index] = {
            ...newBankAccounts[index],
            name: event.target.value
        }
        setBankAccounts(newBankAccounts)
    }

    const handleNameBankBankAccountChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newBankAccounts = [...bankAccounts]
        newBankAccounts[index] = {
            ...newBankAccounts[index],
            bankName: event.target.value
        }
        setBankAccounts(newBankAccounts)
    }

    const handleNumberBankAccountChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newBankAccounts = [...bankAccounts]
        newBankAccounts[index] = {
            ...newBankAccounts[index],
            number: event.target.value
        }
        setBankAccounts(newBankAccounts)
    }

    const handleRemove = (index: number) => {
        const updatedPreviews = [...bankAccounts];
        updatedPreviews.splice(index, 1);
        setBankAccounts(updatedPreviews);
    }

    const handleAddBankAccount = () => {
        setBankAccounts([...bankAccounts, new BankAccountModel("", "", "")])
    }

    return <div className="w-full flex flex-col mt-[40px] rounded-[8px] p-[20px] shadow-lg border-2 border-gray-300 relative pb-[80px]">
        <p className="text-[24px] font-bold text-gray-600 mb-[20px]">Contact & Bank Account Information</p>
        <div className="w-full gap-x-[20px] flex flex-row">
            <UndanganKuInput
                label="Phone Number"
                value={phoneNumber}
                type="number"
                onChange={handlePhoneNumberChange}/>
            <UndanganKuInput
                label="Email"
                value={email}
                type="text"
                onChange={handleEmailChange}/>
        </div>
        <div className="w-full flex flex-col relative pb-[80px]"> 
            {
                bankAccounts.map((data, index) => {
                    return <BankAccountCreate
                        bankAccount={data}
                        onNumberChange={(event) => handleNumberBankAccountChange(index, event)}
                        onBankNameChange={(event) => handleNameBankBankAccountChange(index, event)}
                        onNameChange={(event) => handleNameBankAccountChange(index, event)}
                        onRemove={() => handleRemove(index)}/>
                })
            }
            <div className="flex flex-row gap-x-[20px] absolute right-0 bottom-[20px]">
                <UndanganKuButton text="Add Bank Account" onClick={handleAddBankAccount}/>
            </div>
        </div>
        <div className="flex flex-row gap-x-[20px] absolute right-[20px] bottom-[20px]">
            <UndanganKuButton text="Save" onClick={handleAddBankAccount}/>
        </div>
    </div>
}