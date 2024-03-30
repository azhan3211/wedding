import Image from "@/node_modules/next/image";

interface HeroProps {
    src: string
}

export default function Hero({ src }: HeroProps) {
    return <div>
        <img 
            src={src} 
            className="w-full aspect-[3/1.2] object-cover"/>
    </div>
}