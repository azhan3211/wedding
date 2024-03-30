interface UndanganKuButtonProps {
    onClick?: () => void
    text: String
}

export default function UndanganKuButton({ onClick, text }: UndanganKuButtonProps) {
    return <button className="w-fit h-[50px] hover:bg-secondary px-[20px] rounded-[8px] bg-main shadow-lg text-white uppercase font-bold" onClick={onClick}>{ text }</button>
}