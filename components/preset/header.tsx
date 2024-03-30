export default function Header() {

    return <div className="flex items-center w-full justify-center" style={{ height: "100px" }}>
        <ul className="w-full flex justify-center gap-x-[50px]">
            <li className="cursor-pointer text-[20px] font-semibold">Header</li>
            <li className="cursor-pointer text-[20px] font-semibold">Prewed Photo</li>
            <li className="cursor-pointer text-[20px] font-semibold">Wali</li>
            <li className="cursor-pointer text-[20px] font-semibold">Location</li>
            <li className="cursor-pointer text-[20px] font-semibold">Acara</li>
        </ul>
    </div>

}