import SearchComponent from "@/components/search"
import InvitationListItem from "./components/invitationlistitem"

export default function InvitationList() {
    return <div className="w-full flex flex-col items-center px-[100px] py-[80px]">
        <div className="flex flex-col items-center w-[1000px]">
            <p className="text-[40px] font-bold text-gray-600 mb-[80px]">Daftar Undangan</p>
            <SearchComponent
                onSearch={(value) => {}}/>
            {
                Array.from({ length: 10 }, () => {
                    return <InvitationListItem/>
                })
            }
        </div>
    </div>
}