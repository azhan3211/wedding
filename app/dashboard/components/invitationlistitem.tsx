import { TbEdit } from "react-icons/tb"
import { AiOutlineDelete } from "react-icons/ai";
import { MdCoPresent } from "react-icons/md";

export default function InvitationListItem() {
    return <div className="w-full rounded-[8px] border-2 border-gray-300 flex flex-row p-[20px] justify-center items-center mb-[20px] shadow-lg">
        <div className="flex flex-col w-full">
            <p className="font-bold text-[18px] text-gray-600">Invitation Name</p>
            <p className="text-[14px] text-gray-600">Category</p>
            <p className="text-[14px] text-gray-600">12 December 2024</p>
        </div>
        <div className="flex flex-row justify-center items-center gap-x-[20px]">
            <button
                className="h-[40px] w-[40px] flex items-center justify-center text-red-600 font-bold">
                <AiOutlineDelete className="h-full w-full"/>
            </button>
            <button
                className="h-[40px] w-[40px] flex items-center justify-center text-red-600 font-bold">
                <TbEdit className="h-full w-full"/>
            </button>
            <button
                className="h-[40px] w-[40px] flex items-center justify-center text-red-600 font-bold">
                <MdCoPresent className="h-full w-full"/>
            </button>
        </div>
    </div>
}