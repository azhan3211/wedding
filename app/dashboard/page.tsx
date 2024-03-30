'use client'

import { useState } from "react"
import CreateInvitationComponent from "./createinvitation"
import InvitationList from "./invitationlist"

export default function Dashboard() {

    const [index, setIndex] = useState(0)

    const handleToHomePage = () => {
        window.location.replace("/home")
    }

    const handleChangeIndex = (index: number) => {
        setIndex(index)
    }

    return <div className="w-full flex flex-row">
        <div className="w-[20%] h-screen bg-gray-300 pt-[50px] flex flex-col items-center fixed">
            <img src="../images/instagram.png" alt="" className="w-[50px] h-[50px] mb-[80px]" />
            <ul className="text-[20px] font-bold text-gray-600 flex flex-col gap-y-[20px] w-full">
                <li className="w-full cursor-pointer hover:text-white h-50px] py-[10px] px-[40px] hover:bg-gray-500" onClick={() => handleChangeIndex(0)}>Buat Undangan</li>
                <li className="w-full cursor-pointer hover:text-white h-50px] py-[10px] px-[40px] hover:bg-gray-500" onClick={() => handleChangeIndex(1)}>Undanganku</li>
                <li className="w-full cursor-pointer hover:text-white h-50px] py-[10px] px-[40px] hover:bg-gray-500" onClick={() => handleChangeIndex(2)}>Profile</li>
                <li className="w-full cursor-pointer hover:text-white h-50px] py-[10px] px-[40px] hover:bg-gray-500" onClick={handleToHomePage}>Home</li>
                <li className="w-full cursor-pointer hover:text-white h-50px] py-[10px] px-[40px] hover:bg-gray-500" onClick={() => handleChangeIndex(4)}>Logout</li>
            </ul>
        </div>
        <div className="w-full h-full ms-[20%] bg-white">
            {
                index === 0 && <CreateInvitationComponent/> || 
                index === 1 && <InvitationList/> || 
                index === 2 && <CreateInvitationComponent/> || 
                index === 4 && <CreateInvitationComponent/>
            }
        </div>
    </div>
}