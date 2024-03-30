import Design2 from "../design2";

interface BrideInfo2Props {
    maleBride: BrideModel
    femaleBride: BrideModel
}

export class BrideModel {
    constructor(
        readonly name: string,
        readonly from: string,
        readonly image: string,
        readonly instagram: string
    ) {}
}

export default function BrideInfo2({ maleBride, femaleBride }: BrideInfo2Props) {
    return <Design2 backgroundImage="flower">
        <div className="flex flex-col w-fit justify-center items-center mr-[580px]">
            <img src={maleBride.image} alt="" className="w-[400px] h-[400px] rounded-[50%] border-4 border-design2-button object-cover" />
            <p className="text-design2-button mt-[20px] text-[20px] font-bold">{maleBride.name}</p>
            <p className="text-design2-button text-[16px] font-semibold">{maleBride.from}</p>
            <img src="../images/instagram.png" className="mt-[10px] w-[20px] h-[20px]" />
        </div>
        <div className="flex flex-col w-fit justify-center items-center ml-[580px]">
            <img src={femaleBride.image} alt="" className="w-[400px] h-[400px] rounded-[50%] border-4 border-design2-button object-cover" />
            <p className="text-design2-button mt-[20px] text-[20px] font-bold">{femaleBride.name}</p>
            <p className="text-design2-button text-[16px] font-semibold">{femaleBride.from}</p>
            <img src="../images/instagram.png" className="mt-[10px] w-[20px] h-[20px]" />
        </div>
    </Design2>
}