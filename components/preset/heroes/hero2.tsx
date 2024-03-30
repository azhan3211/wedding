import Design2 from "../design2";

interface Hero2Props {
    src: string;
}


export default function Hero2({ src }: Hero2Props) {

    return <Design2 backgroundColor="design2-secondary" backgroundImage="flower">
        <p className="text-[18px] text-cyan-900">You're joyfully invited to celebrate the wedding of</p>
        <p className="text-[40px] text-cyan-900">Joe & Joe</p>
        <img className="w-[1000px] aspect-[2/1.5] object-cover mt-[40px] rounded-[200px] shadow-lg" src={src}/>
        <p className="text-[18px] text-cyan-900 mt-[40px]">Friday 20th May 2024 at Old Rectory Killyman</p>
        <p className="text-[18px] text-cyan-900">Ceremony and reception -- 2pm til' late</p>
        <button className="text-[18px] mt-[10px] bg-design2-button text-design2 rounded-[20px] px-[20px] py-[5px] shadow-lg">Complete RSVP Form</button>
    </Design2>
}